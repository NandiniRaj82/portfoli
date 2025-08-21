'use client';

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded callback
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: {
  delay: 0, // optional, default is 0
},
          },
          modes: {
            push: {
              quantity: 6,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#8b5cf6", "#3b82f6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"],
          },
          links: {
            color: "#8b5cf6",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1.5,
            triangles: {
              enable: true,
              opacity: 0.1,
            },
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 2,
            straight: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 120,
          },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: ["circle", "triangle", "polygon"],
            options: {
              polygon: {
                sides: 6,
              },
            },
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
            },
          },
          wobble: {
            distance: 20,
            enable: true,
            speed: {
              angle: 50,
              move: 10,
            },
          },
        },
        detectRetina: true,
        smooth: true,
        style: {
          filter: "blur(0px) brightness(1.2)",
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticleBackground;