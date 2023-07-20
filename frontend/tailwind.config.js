/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "primary-gradient": "url('./assets/background.png')",
            },
            colors: {
                myblue: "#0085FF",
            },
        },
    },
    plugins: [],
};
