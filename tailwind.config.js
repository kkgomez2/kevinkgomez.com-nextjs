// tailwind.config.js
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'even-widest': ".3em",
      },
      lineHeight: {
        '12': '3rem',
        '12.5': '3.125rem',
       }
    }
  },
};
