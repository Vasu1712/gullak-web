/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sfpro: ["SF-Pro", "system-ui"]
        },
        height: {
          "1/10": "10%",
          "9/10": "90%"
        },
        colors: {
          grad1: "#efefff",
          grad2: "#e0e0fb",
          grad3: "#f1f3fd",
          deepblue1: "#5278c7",
          deepblue2: "#233f78",
          darkpurple:"#22024b",
          deeppurple:"#6750a4",
          lavender1: "#9babf8",
          lavender2: "#8082ed",
          pink1: "#feb4c5",
          pink2: "#db869a",
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  
  