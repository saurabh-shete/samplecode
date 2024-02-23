/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                'custom-expanded-width': '24rem', // Adjust the width to your desired value
            },
            colors: {
                'highlight-purple': '#9747FF',
                'primary-blue': '#4257BE',
                'secondary-blue': '#8B99DC',
                'light-blue': '#D4DAF9',
                'background-grey': '#F8F8F8',
                'secondary-grey': '#7B7B7B',
                'primary-grey': '#5E5E5E',
                'mandatory-red': '#D84040',
                'status-pink': '#FC7F7F',
                'border-gray': '#C0C0C0',
                'lavender-light': '#E8DEF8',
                'lavender-dark': '#6941C6',
            },
        },
    },
    plugins: [],
};
