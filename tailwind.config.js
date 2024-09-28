/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#B72A36",
          100: "#B72A36",
          200: "#DE5560",
          300: "#F4F4F4",
        },
      },
    },
  },
  plugins: [],
};
