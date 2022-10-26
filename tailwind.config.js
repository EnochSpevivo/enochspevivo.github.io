/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}', './src/views/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
          fontFamily: {
            montserrat: ['Montserrat'],
          },
        },
    },
    plugins: [],
};
