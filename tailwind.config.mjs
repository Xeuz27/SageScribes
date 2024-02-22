/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#935363',
                secondary: '#efc3c5',
                third: '#785e60',
                forth: '#e6dbdb',
            },
        },
    },
    plugins: [],
};
