/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/app/**/*.{js,ts,jsx,tsx}',       // The main app directory
      './src/components/**/*.{js,ts,jsx,tsx}', // Components directory
      './src/lib/**/*.{js,ts,jsx,tsx}',        // lib directory (if you use any utility classes there)
      './src/styles/**/*.{js,ts,jsx,tsx}', // Include the lib folder if you're using Tailwind classes in it
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
