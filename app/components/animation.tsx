"use client";
import React, { useEffect, useRef } from "react";

type CircleElement = HTMLDivElement & { x: number; y: number };

const CursorTrail = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef<(CircleElement | null)[]>([]);

  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e",
  ];

  useEffect(() => {
    const circles = circlesRef.current;

    circles.forEach((circle, index) => {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
      }
    });

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach((circle, index) => {
        if (!circle) return;

        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        const scale = (circles.length - index) / circles.length;
        circle.style.transform = `scale(${scale})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        if (nextCircle) {
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        }
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          ref={(el: HTMLDivElement | null) => {
            if (el) circlesRef.current[i] = el as CircleElement;
          }}
          className="h-6 w-6 rounded-full fixed top-0 left-0 pointer-events-none z-[99999999]"
        ></div>
      ))}
    </>
  );
};

export default CursorTrail;
