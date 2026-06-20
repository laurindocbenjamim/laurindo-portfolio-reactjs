import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Precise cursor tracking with motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for smooth tracking values
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Avoid setting cursor on touch screens or mobile
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("clickable") ||
        target.closest(".clickable");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("pointerleave", handleMouseLeave);
    document.addEventListener("pointerenter", handleMouseEnter);
    window.addEventListener("mouseover", updateHoverState);

    // Apply global cursor hide to body
    document.body.style.cursor = "none";

    const style = document.createElement("style");
    style.innerHTML = `
      a, button, input, textarea, [role="button"], .clickable {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("pointerleave", handleMouseLeave);
      document.removeEventListener("pointerenter", handleMouseEnter);
      window.removeEventListener("mouseover", updateHoverState);
      document.body.style.cursor = "auto";
      style.remove();
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Halo Follower Ring (Dynamic expanding Magenta outline) */}
      <motion.div
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? "#ec4899" : "#a855f7",
          backgroundColor: isHovered ? "rgba(236, 72, 153, 0.1)" : "rgba(168, 85, 247, 0.0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.2 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-purple-500 pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_15px_rgba(168,85,247,0.4)]"
      />

      {/* Inner Dot Active Center (Bright glowing Cyan/White center) */}
      <motion.div
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
        }}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#ffffff,0_0_20px_#0ea5e9]"
      />
    </>
  );
}

export function ClonedBackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 selection:bg-transparent">
      {/* 1. Grid Mesh / Grid Overlay Pattern in deep violet/purple */}
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* 2. Top-Left Marker: "x x x" symbols */}
      <div className="absolute top-12 left-12 text-purple-400/40 font-mono tracking-[0.4em] text-xs select-none">
        x x x
      </div>

      {/* 3. Left-Center Float: Small solid lavender dot */}
      <div className="absolute top-[40%] left-[5%] w-4 h-4 rounded-full bg-purple-200/70 shadow-[0_0_15px_rgba(216,180,254,0.3)]" />

      {/* 4. Bottom-Left: Double large thick Lavender Ring Arc */}
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full border-[16px] border-purple-200/20 -translate-x-[20%] translate-y-[20%] border-t-purple-200/40 border-r-purple-200/40" />
      <div className="absolute bottom-0 left-0 w-[480px] h-[480px] rounded-full border border-dashed border-purple-300/10 -translate-x-[20%] translate-y-[20%]" />

      {/* 5. Bottom-Left Gold Glowing Crown badge */}
      <div className="absolute bottom-16 left-16 w-12 h-12 rounded-full bg-neutral-900 border border-amber-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-5 h-5 text-amber-400 drop-shadow-[0_0_4px_rgba(245,158,11,0.4)]"
        >
          <path d="M2 19h20v2H2v-2zm1-2l1.5-9 4.5 4 3-6 3 6 4.5-4L21 17H3z" />
        </svg>
      </div>

      {/* 6. Dot Matrix Patterns (Top-Right and Middle-Bottom) */}
      <div 
        className="absolute top-16 right-16 w-32 h-20 opacity-30 select-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(147, 51, 234, 0.5) 1.5px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />
      
      <div 
        className="absolute bottom-16 left-32 w-24 h-16 opacity-30 select-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(147, 51, 234, 0.5) 1.5px, transparent 1.5px)",
          backgroundSize: "10px 10px",
        }}
      />

      {/* 7. Bottom-Center: "x x x x x" markers */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-purple-400/40 font-mono tracking-[0.5em] text-xs select-none">
        x x x x x
      </div>

      {/* 8. Bottom-Right Vivid Pink Ring Outline */}
      <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 rounded-full border-[10px] border-fuchsia-500/70" />

      {/* 9. Bottom-Right Solid Violet Dot */}
      <div className="absolute bottom-16 right-64 w-6 h-6 rounded-full bg-purple-700/80 shadow-[0_0_15px_rgba(109,40,217,0.4)]" />

      {/* 10. Right-Center Solid Lavender Dot */}
      <div className="absolute top-[55%] right-24 w-8 h-8 rounded-full bg-purple-200/80 shadow-[0_0_25px_rgba(216,180,254,0.4)]" />

      {/* 11. Right-Upper Edge Protruding Big Lavender Circle Portion */}
      <div className="absolute top-[25%] -right-16 w-48 h-48 rounded-full bg-purple-100/90 shadow-[0_0_40px_rgba(232,121,249,0.15)]" />
    </div>
  );
}
