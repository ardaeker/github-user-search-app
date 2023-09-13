import { Variants } from "framer-motion";

export const containerVariant: Variants = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
  hidden: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

export const containerItemVariants: Variants = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { y: -20, opacity: 0, transition: { duration: 0.5 } },
  exit: { y: 0, opacity: 0, transition: { duration: 0.3 } },
};

export const isSearchingVariant: Variants = {
  initial: {
    y: 50,
  },
  active: {
    y: 0,
  },
  deactive: {
    y: -50,
  },
  exit: {
    y: 50,
  },
};

export const errNotFoundVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
