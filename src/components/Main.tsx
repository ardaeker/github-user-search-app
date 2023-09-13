"use client";

import axios from "axios";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { minDelay } from "@/utils/minDelay";
import { AnimatePresence, motion } from "framer-motion";
import {
  containerItemVariants,
  containerVariant,
  errNotFoundVariant,
  isSearchingVariant,
} from "@/animations/variants";
import {
  SearchIcon,
  CompanyIcon,
  LocationIcon,
  TwitterIcon,
  WebsiteIcon,
  Circle,
} from "@/components/Icons";
import Link from "next/link";

type GitHubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null | string;
  blog: string;
  location: string;
  email: string | null;
  hireable: null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
} | null;

export default function Main() {
  const [user, setUser] = useState<GitHubUser>({
    login: "octocat",
    id: 583231,
    node_id: "MDQ6VXNlcjU4MzIzMQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/octocat",
    html_url: "https://github.com/octocat",
    followers_url: "https://api.github.com/users/octocat/followers",
    following_url:
      "https://api.github.com/users/octocat/following{/other_user}",
    gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
    starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
    organizations_url: "https://api.github.com/users/octocat/orgs",
    repos_url: "https://api.github.com/users/octocat/repos",
    events_url: "https://api.github.com/users/octocat/events{/privacy}",
    received_events_url: "https://api.github.com/users/octocat/received_events",
    type: "User",
    site_admin: false,
    name: "The Octocat",
    company: "@github",
    blog: "https://github.blog",
    location: "San Francisco",
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 8,
    public_gists: 8,
    followers: 10423,
    following: 9,
    created_at: "2011-01-25T18:44:36Z",
    updated_at: "2023-08-22T11:19:25Z",
  });
  const [username, setUsername] = useState<string>("octocat");
  const [isUserFound, setIsUserFound] = useState<boolean>(true);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [errNotFound, setErrNotFound] = useState<boolean>(false);

  const getUserData = async () => {
    try {
      const user = await axios.get(`https://api.github.com/users/${username}`);

      setUser(user.data);

      setTimeout(() => {
        setIsUserFound(true);
      }, 750);
    } catch (error) {
      setUser(null);
      setTimeout(() => {
        setErrNotFound(true);
      }, 750);
    }
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSearching(true);
    setIsUserFound(false);
    setErrNotFound(false);

    await minDelay(getUserData(), 750);

    setIsSearching(false);
  }

  return (
    <main className=" w-full lg:min-w-[45.625rem] mt-9 md:max-w-xl md:mx-auto lg:max-w-3xl ">
      <div className="w-full relative">
        <form className="relative z-20" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search GitHub username…"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            className="w-full focus:outline-none   placeholder:text-metallic-blue dark:placeholder:text-white text-metallic-blue dark:text-white bg-milk-white dark:bg-blue-zodiac transition-colors duration-300 h-16 rounded-2xl shadow-input dark:shadow-none pl-[2.88rem] md:pl-20 text-h4 md:text-[1.125rem] md:font-normal"
          />
          <SearchIcon className="absolute fill-blue top-1/2 transform -translate-y-1/2 left-4 md:left-8 h-6 w-6 " />

          <button className="absolute hover:bg-[#60ABFF] focus:bg-blue overflow-hidden top-1/2 w-[75px] h-[50px] md:w-[106px] md:h-[50px] bg-blue right-[0.44rem] text-h4 transform -translate-y-1/2 py-[0.78rem]  px-[0.80rem]  text-white rounded-xl">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key="isNotSearching"
                initial="initial"
                animate={isSearching ? "active" : "deactive"}
                exit="exit"
                variants={isSearchingVariant}
                transition={{ type: "spring", bounce: 0.45, duration: 0.5 }}
                className="z-0 absolute top-0  left-0   flex flex-col  justify-start lg:h-[100px] lg:w-[106px]"
              >
                <span className="min-h-[50px] min-w-[75px] md:min-w-[106px] lg:min-h-[50px] flex items-center justify-center">
                  <Circle className="animate-spin h-6 w-6 text-white" />
                </span>
                <span className="md:text-h3 md:font-bold min-h-[50px] min-w-[75px] lg:min-h-[50px] flex items-center justify-center">
                  Search
                </span>
              </motion.span>
            </AnimatePresence>
          </button>
        </form>
        <AnimatePresence>
          {errNotFound && (
            <motion.span
              initial="initial"
              animate="animate"
              exit="exit"
              variants={errNotFoundVariant}
              transition={{ duration: 0.3 }}
              className="absolute z-20 text-[#f74646] right-1/2 transform translate-x-1/2  -bottom-10 text-body md:text-h2 md:-bottom-20 font-bold lg:text-body lg:right-36 lg:bottom-1/2 lg:translate-x-0 lg:translate-y-1/2 "
            >
              No results
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {isUserFound && (
          <motion.div
            key="containerResultAnimation"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariant}
            transition={{ type: "spring", ease: "linear", duration: 0.65 }}
          >
            <div className="lg:flex lg:justify-between lg:gap-9 mt-4 w-full p-6 md:p-10 lg:p-12 duration-300 shadow-container dark:shadow-none rounded-2xl bg-milk-white dark:bg-blue-zodiac ">
              <motion.div
                variants={containerItemVariants}
                className="hidden h-16 w-16 md:h-28 md:w-28 overflow-hidden rounded-full lg:inline-block relative"
              >
                {user?.avatar_url && (
                  <Image
                    src={user?.avatar_url}
                    alt="Profile Image"
                    unoptimized
                    fill={true}
                  />
                )}
              </motion.div>

              <motion.div
                variants={containerItemVariants}
                className="flex flex-col gap-6 md:gap-8 lg:max-w-[30rem]"
              >
                <div className="flex gap-5 md:gap-10 items-center">
                  <div className="h-16 w-16 md:h-28 md:w-28 bg-sky-400 rounded-full lg:hidden relative overflow-hidden">
                    {user?.avatar_url && (
                      <Image
                        src={user?.avatar_url}
                        alt="Profile Image"
                        fill={true}
                      />
                    )}
                  </div>
                  <div>
                    <h2 className="text-h3 md:text-h1 font-bold text-dark-slate dark:text-white">
                      {user?.name}
                    </h2>
                    <span className="text-h4 md:text-h3 font-normal text-blue ">
                      @{user?.login}
                    </span>
                    <p className="text-h4 md:text-body font-normal text-greyish-blue mt-2 dark:text-white">
                      Joined 25 Jan 2011
                    </p>
                  </div>
                </div>
                {user?.bio ? (
                  <p className="text-[0.76rem] md:text-body font-normal leading-[1.5625rem] text-metallic-blue  dark:text-white">
                    {user?.bio}
                  </p>
                ) : (
                  <p className="text-[0.76rem] md:text-body font-normal leading-[1.5625rem] text-metallic-blue  dark:text-white">
                    This profile has no bio
                  </p>
                )}

                <div className="flex justify-between md:justify-start md:gap-24 rounded-xl  duration-300 items-center p-4 bg-ghost-white dark:bg-mirage">
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-[0.6875rem] md:text-h4 font-normal text-metallic-blue dark:text-white">
                      Repos
                    </p>
                    <span className="text-h3 md:text-h2 font-bold text-dark-slate dark:text-white">
                      {user?.public_repos}
                    </span>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-[0.6875rem] md:text-h4 font-normal text-metallic-blue dark:text-white">
                      Followers
                    </p>
                    <span className="text-h3 md:text-h2 font-bold text-dark-slate dark:text-white">
                      {user?.followers}
                    </span>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <p className="text-[0.6875rem] md:text-h4 font-normal text-metallic-blue dark:text-white">
                      Following
                    </p>
                    <span className="text-h3 md:text-h2 font-bold text-dark-slate dark:text-white">
                      {user?.following}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex gap-4 items-center">
                    <LocationIcon
                      className={`duration-300 h-5 w-5  ${
                        user?.location
                          ? "fill-metallic-blue dark:fill-white"
                          : "fill-metallic-blue/50 dark:fill-white/50"
                      }`}
                    />

                    {user?.location ? (
                      <p className="text-h4 font-normal md:text-body text-metallic-blue dark:text-white">
                        {user?.location}
                      </p>
                    ) : (
                      <p className="text-h4 font-normal md:text-body text-metallic-blue/50 dark:text-white/50">
                        Not Available
                      </p>
                    )}
                  </div>
                  <div className="flex gap-4 items-center md:row-start-2">
                    <WebsiteIcon
                      className={`duration-300 h-5 w-5  ${
                        user?.blog
                          ? "fill-metallic-blue dark:fill-white"
                          : "fill-metallic-blue/50 dark:fill-white/50"
                      }`}
                    />
                    {user?.blog ? (
                      <Link
                        href={user?.blog}
                        target="_blank"
                        className="text-h4 font-normal md:text-body text-metallic-blue dark:text-white hover:underline"
                      >
                        {user?.blog}
                      </Link>
                    ) : (
                      <p className="text-h4 font-normal md:text-body text-metallic-blue/50 dark:text-white/50">
                        Not Available
                      </p>
                    )}
                  </div>
                  <div className="flex gap-4 items-center">
                    <TwitterIcon
                      className={`duration-300 h-5 w-5  ${
                        user?.twitter_username
                          ? "fill-metallic-blue dark:fill-white"
                          : "fill-metallic-blue/50 dark:fill-white/50"
                      }`}
                    />
                    {user?.twitter_username ? (
                      <p className="text-h4 font-normal md:text-body text-metallic-blue dark:text-white">
                        @{user?.twitter_username}
                      </p>
                    ) : (
                      <p className="text-h4 font-normal md:text-body text-metallic-blue/50 dark:text-white/50">
                        Not Available
                      </p>
                    )}
                  </div>
                  <div className="flex gap-4 items-center">
                    <CompanyIcon
                      className={`duration-300 h-5 w-5  ${
                        user?.company
                          ? "fill-metallic-blue dark:fill-white"
                          : "fill-metallic-blue/50 dark:fill-white/50"
                      }`}
                    />
                    {user?.company ? (
                      <p className="text-h4 font-normal md:text-body text-metallic-blue dark:text-white">
                        {user?.company}
                      </p>
                    ) : (
                      <p className="text-h4 font-normal md:text-body text-metallic-blue/50 dark:text-white/50">
                        Not Available
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
