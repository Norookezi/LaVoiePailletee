/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                kony: ['"kony"', 'sans-serif'],
                roboto: ['"roboto"', 'sans-serif'],
            },
            colors: {
                mediumseagreen: '#06D79F',
                crimson: '#F04770',
                goldenrod: '#FFC53E',
            },
        },
    },
    plugins: [],
};
