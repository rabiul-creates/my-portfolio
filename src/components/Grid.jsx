import { useEffect, useRef } from "react";

export default function Grid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const cellSize = 10;
    const cells = new Map();

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    let lastMove = 0;

    function handleMouseMove(e) {
      const now = Date.now();

      if (now - lastMove < 150) return;
      lastMove = now;

      const x = Math.floor(e.clientX);
      const y = Math.floor(e.clientY);

      const key = `${x},${y}`;

      cells.set(key, performance.now());
    }
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;

    function animate(time) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const duration = 600;

      for (const [key, startTime] of cells) {
        const [x, y] = key.split(",").map(Number);

        const elapsed = time - startTime;
        const progress = elapsed / duration;

        if (progress >= 1) {
          cells.delete(key);
          continue;
        }

        const opacity = 1 - progress;

        ctx.fillStyle = `rgb(251, 146, 60, ${opacity})`;

        ctx.fillRect(x - cellSize / 2, y - cellSize / 2, cellSize, cellSize);
      }
      animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className=" pointer-events-none fixed  inset-0  block z-99"
    ></canvas>
  );
}

//  <div className="w-full absolute inset-0 flex gap-x-2 flex-wrap items-center justify-center top-0 left-0  right-0 mx-auto min-h-[450vh] overflow-x-hidden ">
//       {Array.from(Array(100 * 100), (x, i) => (
//         <motion.div
//           whileHover={{
//             backgroundColor: "#FB923C",
//             // opacity: 1,
//           }}
//           whileTap={{
//             backgroundColor: "#FB923C",
//             //  opacity: 1,
//           }}
//           transition={{ duration: 0.2, ease: "easeIn" }}
//           key={i}
//           id={i}
//           className="w-4 h-4  aspect-square inset-0 bg-rose-900 hover:bg-orange-400 transition-colors duration-200   "
//         />
//       ))}
//     </div>
