module.exports = {
  content: ["./src/**/*/*.{astro,html,js,jsx}"],
  theme: {
    extend: {},
  },
  Plugins: [require("@tailwindcss/line-clamp")],
}
