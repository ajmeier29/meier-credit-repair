/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#eaf0f1",
          secondary: "teal",
        },
      },
    ],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        //'hero-image': "url('/images/beachSunset.jpg')",
        // 'hero-image': "url('/images/blue-breakthrough-over-mountains.webp')",
        // 'hero-image-mobile': "url('/images/blue-breakthrough-over-mountains-mobile.webp')"
        'hero-gradient-background':
          "linear-gradient(17deg, rgba(78,198,98,1) 0%, rgba(61,99,213,1) 100%)",
        "footer-gradient":
          "linear-gradient(216deg, rgba(78,198,98,1) 0%, rgba(61,99,213,1) 100%)",
      },
      colors: {
        "primary-background": "#eaf0f1",
        "primary-check": "#14a935",
        "option-hover-bg": "#3f8790",
        "option-bg": "#c0c7c8",
        "primary-hover": "pink-600",
        "primary-green": "#4ec662",
        "primary-blue": "#3d63d5",
        "primary-blue-hover": "#4b74ee",
      },
      fontSize: {
        "navbar-font-xl": "20px"
      },
      fontFamily: {
        urbanist: 'Urbanist'
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

