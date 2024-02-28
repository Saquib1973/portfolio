
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

            // colors: {
            //     'black': '#1C1C1C',
            //     'white': '#FFFFFF',
            //     'blackFade': '#232323',
            //     'green': '#37996B',
            // },

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
                Instrument: ["Instrument Sans", "sans-serif"]
            },
        },

    },
    plugins: [createThemes({
        dark: {
            'black': '#1C1C1C',
            'white': '#FFFFFF',
            'blackFade': '#232323',
            'green': '#37996B',
        },
        light: {
            'white': '#1C1C1C',
            'black': '#FFFFFF',
            'blackFade': '#f5f5f5',
            'green': '#1E6C44',
        }
    }),],
};