const plugin = require ('tailwindcss/plugin')


const rotationClass = plugin (function ({addUtilities}){
  addUtilities({
    ".my-rotate-y-180":{
      transform: "rotateY(180deg)"
    },
    ".preserve-3d":{
      transformStyle: "preserve-3d"
    },
    ".perspective":{
      perspective: "1000px"
    },
    ".backface-hidden":{
      backfaceVisibility: "hidden"

    }
  })
});
  
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [rotationClass],
};
