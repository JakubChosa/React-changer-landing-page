export const navbarVariants = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      stiffness: 70,
      delay: 0.4,
      mass: 0.85,
      damping: 10,
    },
  },
};

export const heroVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.6,
    },
  },
};

export const jumpingVariants = {
  hidden: {
    y: "100vh",
    scale: 0.5,
  },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 13,
    },
  },
  exit: { scale: 0, transition: { duration: 0.2 } },
};

export const questionVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};
