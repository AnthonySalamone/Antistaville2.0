/** @type {import('tailwindcss').Config} */

// Custom fluid typography based on https://www.hunterjennings.dev/writing/fluid-typography-configuration
const DEFAULT_MIN_SCREEN = 480;
const DEFAULT_MAX_SCREEN = 1280;

/**
 * It returns a CSS `clamp` function string that will fluidly
 * transition between a `minSize` and `maxSize` based on the screen size provided
 */
const createFluidValue = (
  minSize,
  maxSize,
  minScreenSize = DEFAULT_MIN_SCREEN,
  maxScreenSize = DEFAULT_MAX_SCREEN,
) => {
  return `clamp(${minSize}px, ${getPreferredValue(
    minSize,
    maxSize,
    minScreenSize,
    maxScreenSize,
  )}, ${maxSize}px)`;
};

/**
 * Determines how fluid typography scales
 */
const getPreferredValue = (minSize, maxSize, minScreenSize, maxScreenSize) => {
  const vwCalc = cleanNumber(
    (100 * (maxSize - minSize)) / (maxScreenSize - minScreenSize),
  );
  const pxCalc = cleanNumber(
    (minScreenSize * maxSize - maxScreenSize * minSize) /
      (minScreenSize - maxScreenSize),
  );

  return `${vwCalc}vw + ${pxCalc}px`;
};

/**
 * It takes a number, adds a very small number to it, multiplies it by 100, rounds
 * it, and then divides it by 100
 * @param num - The number to be rounded.
 */
const cleanNumber = (num) => Math.round((num + Number.EPSILON) * 100) / 100;


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      grey: {
        50: "#F3F1EE",
        200: "#E8E6E3",
        300: "#D9D7D4",
        700: "#7D7D7D",
        900: "#1C1C1C",
      },
      mint: '#3F9544',
      anis: '#C8E671',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Lexend', 'serif'],
    },
    fontSize: {
      "4xl": [
        createFluidValue(32, 48),
        {
          lineHeight: createFluidValue(36, 54),
          letterSpacing: `calc(${createFluidValue(1, 1.5)} * -1)`,
          fontWeight: 700,
        },
      ],
      "3xl": [
        createFluidValue(25, 27),
        {
          lineHeight: createFluidValue(32, 34),
          letterSpacing: `calc(${createFluidValue(0.7, 0.6)} * -1)`,
          fontWeight: 700,
        },
      ],
      "2xl": [
        "23px",
        {
          lineHeight: "28px",
          letterSpacing: -0.3,
        },
      ],
      xl: [
        createFluidValue(21, 23),
        {
          lineHeight: createFluidValue(26, 28),
          letterSpacing: -0.3,
          fontWeight: 600,
        },
      ],
      lg: [
        createFluidValue(20, 23),
        {
          lineHeight: createFluidValue(28, 32),
          letterSpacing: -0.1,
        },
      ],
      base: [
        createFluidValue(17, 18),
        {
          lineHeight: "26px",
        },
      ],
      sm: [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      xs: [
        createFluidValue(14, 16),
        {
          lineHeight: createFluidValue(20, 24),
        },
      ],
      xxs: [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: 0.8,
        },
      ],
    },
    extend: {
      spacing: {
        26: "6.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [],
}
