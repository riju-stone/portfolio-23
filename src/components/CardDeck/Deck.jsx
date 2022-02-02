import { useRef, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { CardsWrapper, Cards } from "../../styles/projectStyles";

// hooks
import { useIsMobile } from "../../hooks/useMediaQuery";

const transition = { type: "spring", stiffness: 300, damping: 50 };

const item = {
  enter: {
    x: 0,
    y: 1000,
    scale: 1.5,
    rotateY: 0,
    rotateZ: 0,
  },
  main: (i) => {
    const rotate = -10 + Math.random() * 20;
    return {
      x: 0,
      y: i * -4,
      scale: 1,
      rotateY: rotate / 10,
      rotateZ: rotate,
      transition: { ...transition, delay: 1 + i * 0.1 },
    };
  },
};

const constraints = { top: 0, right: 0, bottom: 0, left: 0 };
const swipeForce = 6;
const swipeThreshold = 5000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const transform = ({ x, y, scale, rotateY, rotateZ }) =>
  `perspective(1500px) rotateX(30deg) rotateY(${rotateY}) rotateZ(${rotateZ}) scale(${scale}) translateX(${x}) translateY(${y})`;

export default function Deck({ cards }) {
  const cardControls = useAnimation();
  const wrapperControls = useAnimation();
  const gone = useRef(new Set()).current;

  const onDragEnd = (index, { offset, velocity }) => {
    const swipeX = swipePower(offset.x, velocity.x);
    const swipeY = swipePower(offset.y, velocity.y);

    // If the strength of the swipe is not high enough, return
    // since each card has the dragConstraints set, the card
    // will animate back to its original position
    if (Math.abs(swipeX) < swipeThreshold && Math.abs(swipeY) < swipeThreshold)
      return;

    // Keep track of cards that are dismissed
    gone.add(index);

    // Animate the card away from the stack, using the offset
    // of the drag multiplied by a force factor.
    // This will slide the card away from the  stack
    cardControls.start((i) => {
      if (index !== i) return {}; // We're only interested in animating the current card
      return {
        transition,
        x: offset.x * swipeForce,
        y: offset.y * swipeForce,
      };
    });

    // If all cards are gone, simple rebuild the card stack after some delay has passed
    if (gone.size === cards.length) {
      gone.clear();
      cardControls.start(item.main);
    }
  };

  // Run the enter animation only once the component is mounted
  // This is kind of what the variants API does, but we can't use
  // variants here since we want the custom controls, thus, we
  // mock what the variants API does and just animate from the
  // enter animation to the main animation.

  const isMobile = useIsMobile();
  let rootMargin;

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: rootMargin,
  });

  const wrapperAnim = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    rootMargin = isMobile ? "-150px" : "-250px";
    function startAnimation() {
      cardControls.start(item.enter);
      cardControls.start(item.main);
    }
    if (inView) {
      wrapperControls.start("visible");
      startAnimation();
    }
  }, [inView]);

  return (
    <CardsWrapper
      ref={ref}
      variants={wrapperAnim}
      initial="hidden"
      animate={wrapperControls}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      {Array(cards.length)
        .fill(null)
        .map((_, i) => (
          <>
            <Cards
              key={i}
              custom={i}
              className="card"
              animate={cardControls}
              transformTemplate={transform}
              drag
              dragElastic={1}
              dragConstraints={constraints}
              onDragEnd={(_, info) => onDragEnd(i, info)}
              style={{ backgroundImage: `url(${cards[i]})` }}
              whileTap={{ scale: 1.2 }}
            />
          </>
        ))}
      <p className="info">
        Click on the Card <br />
        To know more
      </p>
    </CardsWrapper>
  );
}
