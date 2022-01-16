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
import BackgroundVideo from "../../assets/videos/bg.mp4";

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

    renderingCtx.globalCompositeOperation = "copy";
    // renderingCtx.clearReact(0, 0, size.width, size.height);
    renderingCtx.fillStyle = currentTheme === "dark" ? "#011826" : "#ddd";
    renderingCtx.fillRect(0, 0, size.width, size.height);

    const _mouseover = (ev) => {
      curMoving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    };

    const _mouseup = (ev) => {
      curMoving = false;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    };

    const _mousemove = (ev) => {
      if (curMoving) {
        drawingCtx.globalCompositeOperation = "copy";
        renderingCtx.globalCompositeOperation = "destination-out";
        let currentX = ev.pageX - renderingElement.offsetLeft;
        let currentY = ev.pageY - renderingElement.offsetTop;

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
    };

    const _mouseclick = (ev) => {
      curMoving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    };

    renderingElement.addEventListener("mouseover", _mouseover);
    renderingElement.addEventListener("mouseup", _mouseup);
    renderingElement.addEventListener("mousemove", _mousemove);
    renderingElement.addEventListener("click", _mouseclick);

    return () => {
      drawingElement = null;
      drawingElement = renderingElement.cloneNode();
      renderingElement.removeEventListener("mouseover", _mouseover);
      renderingElement.removeEventListener("mouseup", _mouseup);
      renderingElement.removeEventListener("mousemove", _mousemove);
      renderingElement.addEventListener("click", _mouseclick);
    };
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
        <video loop autoPlay muted playsInline preload>
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
