module.exports = {
  content: ["./popup/**/*.html", "./popup/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula"],
  },
}