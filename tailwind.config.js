/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            'sans': ['\'Ubuntu\', sans-serif', 'system-ui'],
            'logo': ['\'Pacifico\', cursive'],
        },
        container: {
            screens: {
                xl: '800px'
            },
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
