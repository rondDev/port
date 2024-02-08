/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        textColor: '#efd3fe',
        backgroundColor: '#160026',
        primaryColor: '#c36cfd',
        secondaryColor: '#a80276',
        accentColor: '#fc2b9d',
        // pink
        primary: {
          "50": "#fdf2f8",
          "100": "#fce7f3",
          "200": "#fbcfe8",
          "300": "#f9a8d4",
          "400": "#f472b6",
          "500": "#ec4899",
          "600": "#db2777",
          "700": "#be185d",
          "800": "#9d174d",
          "900": "#831843"
        }
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
