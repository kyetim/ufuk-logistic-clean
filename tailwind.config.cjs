/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Ufuk Lojistik marka renkleri
                primary: {
                    50: '#f0f7ff',
                    100: '#e0efff',
                    200: '#b9ddff',
                    300: '#7cc2ff',
                    400: '#36a3ff',
                    500: '#0A3D62', // Ana marka rengi (Lacivert)
                    600: '#0A3D62',
                    700: '#0A3D62',
                    800: '#0A3D62',
                    900: '#0A3D62',
                },
                secondary: {
                    50: '#f0f7ff',
                    100: '#e0efff',
                    200: '#b9ddff',
                    300: '#7cc2ff',
                    400: '#60A3D9', // Vurgu rengi (Açık Mavi)
                    500: '#60A3D9',
                    600: '#60A3D9',
                    700: '#60A3D9',
                    800: '#60A3D9',
                    900: '#60A3D9',
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                sans: ['Inter', 'DejaVu Sans', 'system-ui', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
