import React, { useRef, useEffect } from "react";
import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
} from "../../styles/homeStyles";
import useWindowSize from "../../hooks/windowSize";
import { useGlobalStateContext } from "../../context/globalContext";
import BackgroundVideo from "../../assets/videos/video.mp4";

const HomeBanner = ({ onCursor }) => {
  let canvas = useRef(null);
  const size = useWindowSize();
  const { currentTheme } = useGlobalStateContext();

  useEffect(() => {
    let renderingElement = canvas.current;
    let drawingElement = renderingElement.cloneNode();

    let drawingCtx = drawingElement.getContext("2d");
    let renderingCtx = renderingElement.getContext("2d");

    let lastX;
    let lastY;

    let curMoving = false;

    renderingCtx.globalCompositeOperation = "source-over";
    // renderingCtx.clearReact(0, 0, size.width, size.height);
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff";
    renderingCtx.fillRect(0, 0, size.width, size.height);

    renderingElement.addEventListener("mouseover", (e) => {
      curMoving = true;
      lastX = e.pageX - renderingElement.offsetLeft;
      lastY = e.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("mouseup", (e) => {
      curMoving = false;
      lastX = e.pageX - renderingElement.offsetLeft;
      lastY = e.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("mousemove", (e) => {
      if (curMoving) {
        drawingCtx.globalCompositeOperation = "source-over";
        renderingCtx.globalCompositeOperation = "destination-out";
        let currentX = e.pageX - renderingElement.offsetLeft;
        let currentY = e.pageY - renderingElement.offsetTop;

        drawingCtx.lineJoin = "round";
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 120;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    });
  }, [size, currentTheme]);

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.5, 0.05, -0.01, 0.9],
      },
    },
  };
  return (
    <Banner>
      <Video>
        <video loop autoPlay muted>
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
      </Video>
      <Canvas
        ref={canvas}
        height={size.height}
        width={size.width}
        onMouseLeave={onCursor}
        onMouseEnter={() => onCursor("hovered")}
      />
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>Arighna</Headline>
        <Headline variants={child}>Chakraborty</Headline>
      </BannerTitle>
    </Banner>
  );
};

export default HomeBanner;
