/**
 * @author {Celik Koseoglu} <https://github.com/celikkoseoglu/celikk-personal-website>
 */

const COLORS = {
  light: "#EDEDED",
  dark: "#122027"
};

const RADIUS_GROWTH_RATE_MS = 0.025;
const CIRCLE_RESOLUTION = 0.5;
const GROWTH_FUNCTION_EXPONENTIAL = 2.8;

const circleCenterCoordinates = {
  x: null,
  y: null
};

const Circle = {
  ctx: null,
  isDark: null,
  radiusMultiplier: null,
  maxRadiusMultiplier: null,
  prevDrawTS: null,
  height: null,
  width: null,

  setCircleCenterCoordinates: (x, y) => {
    circleCenterCoordinates.x = x;
    circleCenterCoordinates.y = y;
  },

  resetCircleCenterCoordinates: () => {
    circleCenterCoordinates.x = null;
    circleCenterCoordinates.y = null;
  },

  initializeCanvas: (ctx, theme) => {
    Circle.ctx = ctx;
    Circle.isDark = theme === "dark" ? true : false;

    Circle.height = Math.max(
      window.screen.height,
      window.innerHeight
    );
    Circle.width = Math.max(window.screen.width, window.innerWidth);
    Circle.maxRadiusMultiplier =
      Math.max(Circle.width, Circle.height) **
      (1.0 / GROWTH_FUNCTION_EXPONENTIAL);
    Circle.prevDrawTS = Date.now();

    document.body.style.backgroundColor = Circle.isDark
      ? COLORS.light
      : COLORS.white;

    const { width, height } =
      Circle.ctx.canvas.getBoundingClientRect();
    let canvasWidth = Circle.ctx.canvas.width;
    let canvasHeight = Circle.ctx.canvas.height;
    if (canvasHeight !== height || canvasWidth !== width) {
      const { devicePixelRatio: originalRatio = 1 } = window;
      const lowerResolutionRatio = originalRatio * CIRCLE_RESOLUTION;
      Circle.ctx.canvas.width = width * lowerResolutionRatio;
      Circle.ctx.canvas.height = height * lowerResolutionRatio;
      Circle.ctx.scale(lowerResolutionRatio, lowerResolutionRatio);
    }

    if (
      circleCenterCoordinates.x == null ||
      circleCenterCoordinates.y == null
    ) {
      Circle.radiusMultiplier = Circle.isDark
        ? 0
        : Circle.maxRadiusMultiplier;
    }

    return Circle.startAnimation;
  },

  startAnimation: () =>
    Circle.isDark ? Circle.shrinkCircle : Circle.growCircle,

  shrinkCircle: () => {
    Circle.radiusMultiplier -=
      RADIUS_GROWTH_RATE_MS *
      Math.max(1, Date.now() - Circle.prevDrawTS);

    return Circle.verifyCircleBounds;
  },

  growCircle: () => {
    Circle.radiusMultiplier +=
      RADIUS_GROWTH_RATE_MS *
      Math.max(1, Date.now() - Circle.prevDrawTS);

    return Circle.verifyCircleBounds;
  },

  verifyCircleBounds: () => {
    if (
      (Circle.radiusMultiplier <= 0 && Circle.isDark) ||
      (Circle.radiusMultiplier >= Circle.maxRadiusMultiplier &&
        !Circle.isDark)
    ) {
      Circle.ctx.fillStyle = Circle.isDark
        ? COLORS.dark
        : COLORS.light;
      Circle.ctx.fillRect(0, 0, Circle.width, Circle.height);
      Circle.radiusMultiplier = Circle.isDark
        ? 0
        : Circle.maxRadiusMultiplier;
      return null;
    }

    Circle.ctx.clearRect(0, 0, Circle.width, Circle.height);
    return Circle.drawCircle;
  },

  drawCircle: () => {
    Circle.ctx.fillStyle = COLORS.light;
    Circle.ctx.beginPath();
    Circle.ctx.arc(
      circleCenterCoordinates.x,
      circleCenterCoordinates.y,
      Circle.radiusMultiplier ** GROWTH_FUNCTION_EXPONENTIAL,
      0,
      2 * Math.PI
    );
    Circle.ctx.fill();
    Circle.prevDrawTS = Date.now();

    return new Promise((callback) => {
      const returnAfterAnimating = () => {
        callback(Circle.startAnimation);
      };
      window.requestAnimationFrame(returnAfterAnimating);
    });
  }
};

export default Circle;
