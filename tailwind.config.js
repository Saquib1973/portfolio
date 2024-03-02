
const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["'Inter'", "sans-serif"],
                gelasio: ["'Gelasio'", "serif"]
            },
            fontSize: {
                'sm': '12px',
                'base': '14px',
                'xl': '16px',
                '2xl': '20px',
                '3xl': '28px',
                '4xl': '38px',
                '5xl': '50px',
            },
            fontFamily: {
                Instrument: ["Instrument Sans", "sans-serif"],
                Merienda: ["Merienda", "cursive"]
            },
        },

    },
    plugins: [createThemes({
        dark: {
            'black': '#040303',
            'white': '#EEEEEE',
            'blackFade': '#191919',
            'green': '#836FFF',
        },
        light: {
            'white': '#040303',
            'black': '#FFFFFF',
            'blackFade': '#F6F5F5',
            'green': '#6420AA',
        }
    }),],
};