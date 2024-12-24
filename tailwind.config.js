

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        VeryDarkBlue:"hsl(243, 87%, 12%)",
        DesaturatedBlue: "hsl(238, 22%, 44%)",  
        // Accent     
        BrightBlue: "hsl(224, 93%, 58%)",
        lightBlue: "hsl(220, 97%, 70%)",
        VeryLighblue:"hsl(243, 18%, 76%)",
        ModerateCyan: "hsl(170, 59%, 30%)",
        // Neutral
        LightGrayishBlue: "#f8f8fe",
        LightGray: "hsl(0, 0%, 75%)",
        
      },
      screens: {
        sm:"576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        '2xl': "1400px",
      },
      fontFamily:{
        'body':['"Open Sans"','serif'],
        // Headings, Call-to-actions, Header Navigation
        'Raleway': ['"Raleway"','serif']
      },
      
      
    },
  },
  plugins: [],
}


