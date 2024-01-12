const loadingScreenAnimation = {
  show: {
    transition: {
      when: "afterChildren"
    }
  },
  exit: {
    when: "afterChildren"
  }
};

const loadingTitleAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4
    }
  }
};

const loadingProgressAnimation = {
  hidden: {
    x: -window.screen.width
  },
  show: {
    x: 0,
    transition: {
      ease: [0.5, 0.001, 0.08, 0.95],
      duration: 4
    }
  },
  exit: {
    y: -20,
    transition: {
      ease: [0.5, 0.001, 0.08, 0.95],
      duration: 0.4
    }
  }
};

const loadingPercentAnimation = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4
    }
  }
};

export { loadingScreenAnimation, loadingTitleAnimation, loadingProgressAnimation, loadingPercentAnimation };
