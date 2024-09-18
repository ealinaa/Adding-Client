// module.exports = {
//   purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
 
//   darkMode: false,

//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };


module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'], // updated from 'purge'

  darkMode: 'media', // or remove this line entirely

  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
