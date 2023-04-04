import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const DrawingCirle = () => {
    const switchPos = useSelector((state) => state.theme.toggleButtonPos);
    const theme = useSelector((state) => state.theme.currentTheme);

    const RADIUS_GROWING_RATE_MS = 0.025;
    const GROWTH_FUNCTION_EXPONENTIAL = 10;
    const CANVAS_RESOLUTION = 0.4;

    let prevRenderTs = Date.now();
    const canvasRef = useRef(null);

    const screenHeight = Math.max(window.screen.height, window.innerHeight);
    const screenWidth = Math.max(window.screen.width, window.innerWidth);
    let radiusMultiplier =
        Math.max(screenWidth, screenHeight) ** (1.0 / GROWTH_FUNCTION_EXPONENTIAL);

    const drawCircle = (ctx, radius) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = theme == "light" ? "#000000" : "#29F996";
        ctx.filter = "blur(1px)";
        ctx.beginPath();
        ctx.arc(switchPos.x, switchPos.y, radius, 0, 2 * Math.PI);
        ctx.fill();
    };

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        let radius = 0;
        let animationFrameId;

        const { width, height } = context.canvas.getBoundingClientRect();
        if (context.canvas.width !== width || context.canvas.height !== height) {
            const { devicePixelRatio: originalRatio = 1 } = window;
            const lowerResolutionRatio = originalRatio * CANVAS_RESOLUTION;
            context.canvas.width = width * lowerResolutionRatio;
            context.canvas.height = height * lowerResolutionRatio;
            context.scale(lowerResolutionRatio, lowerResolutionRatio);
        }

        const renderCircle = () => {
            const renderStartTs = Date.now();
            const timeSincePrevDraw = renderStartTs - prevRenderTs;

            radius += (RADIUS_GROWING_RATE_MS ^ radiusMultiplier) * Math.max(1, timeSincePrevDraw);
            prevRenderTs = renderStartTs;
            drawCircle(context, radius);
            animationFrameId = window.requestAnimationFrame(renderCircle);
        };

        window.addEventListener("theme-toggled", renderCircle());

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [drawCircle, theme]);

    const styles = {
        light: "fixed h-screen w-screen -z-10 bg-[#29F996]",
        dark: "fixed h-screen w-screen -z-10 bg-[#000000]"
    };
    return (
        <canvas className={theme == "light" ? styles.light : styles.dark} ref={canvasRef}></canvas>
    );
};

export default DrawingCirle;
