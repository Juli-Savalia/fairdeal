"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import "../../assets/styles/particle/particle.css";
import { loadSlim } from "tsparticles-slim"; // ✅ Optimized library

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // ✅ Load optimized version
  }, []);

  return (
    <div className="particles-container"> {/* Wrapper to restrict particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // ✅ Prevent fullscreen mode
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: ["#ffffff", "#41abec", "#4183ec", "#41e2ec"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.6,
              random: true,
              animation: { enable: true, speed: 0.5, minimumValue: 0.3, sync: false },
            },
            size: {
              value: 20,
              random: { enable: true, minimumValue: 10 },
              animation: { enable: true, speed: 3, minimumValue: 10, sync: false },
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "bubble" },
              onClick: { enable: true, mode: "repulse" },
            },
            modes: {
              bubble: { distance: 200, size: 30, duration: 3, opacity: 0.9, speed: 2 },
              repulse: { distance: 150, duration: 0.4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
