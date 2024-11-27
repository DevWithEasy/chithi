/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'design_1' : "url('/images/design_1.png')",
        'design_2' : "url('/images/design_2.png')",
        'design_3' : "url('/images/design_3.png')"
      },
      fontFamily : {
        baishakh: ['baishakh', 'sans-serif'],
        banglaborno: ['banglaborno', 'sans-serif'],
        chainateesa: ['chainateesa', 'sans-serif'],
        deyalika: ['deyalika', 'sans-serif'],
        hostoshoily: ['hostoshoily', 'sans-serif'],
        ichamati: ['ichamati', 'sans-serif'],
        indibangla: ['indibangla', 'sans-serif'],
        jmakash: ['jmakash', 'sans-serif'],
        lipishree: ['lipishree', 'sans-serif'],
        madina: ['madina', 'sans-serif'],
        mainaksign: ['mainaksign', 'sans-serif'],
        nakatra: ['nakatra', 'sans-serif'],
        shaluk: ['shaluk', 'sans-serif'],
        en_adoretime: ['en_adoretime', 'sans-serif'],
        en_auntie: ['en_auntie', 'sans-serif'],
        en_brother: ['en_brother', 'sans-serif'],
        en_geraldin: ['en_geraldin', 'sans-serif'],
        en_haspa: ['en_haspa', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
