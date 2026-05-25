import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1C3D",
          purple: "#7C3AED",
          orange: "#F4521E",
          white: "#FFFFFF",
          altBg: "#F5F7FA",
        },
        text: {
          heading: "#1A1A2E",
          paragraph: "#6B7280",
          light: "#CBD5E1",
        },
        border: {
          soft: "#E5E7EB",
        }
      },
      fontFamily: {
        sans:    ["var(--font-body)", "DM Sans", "sans-serif"],
        heading: ["var(--font-heading)", "Space Grotesk", "sans-serif"],
        mono:    ["var(--font-mono)", "Space Mono", "monospace"],
        // Legacy aliases kept for backward compatibility
        inter:   ["var(--font-body)", "DM Sans", "sans-serif"],
        satoshi: ["var(--font-heading)", "Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0B1C3D 0%, #1E293B 50%, #F4521E 100%)',
      },
      animation: {
        'floating': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
