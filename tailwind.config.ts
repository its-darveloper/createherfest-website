/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	  extend: {
		container: {
		  center: true,
		  padding: {
			DEFAULT: '1rem',
			sm: '2rem',
			lg: '4rem',
			xl: '5rem',
			'2xl': '6rem',
		  },
		  screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1400px',
		  },
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
			// Add CreateHER Fest specific colors
			brand: '#473dc6',
			dark: '#372dc6',
			light: '#5d54d4'
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
			// Add CreateHER Fest secondary color
			brand: '#caa3d6'
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))'
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))'
		  },
		  createher: {
			// Main colors
			purple: '#473dc6',
			'purple-dark': '#2a1c77',
			'purple-light': '#5d54d4',
			pink: '#caa3d6',
			// Additional colors for gradients and accents
			'purple-100': '#6e66dd',
			'purple-200': '#5d54d4',
			'purple-300': '#473dc6',
			'purple-400': '#372dc6',
			'purple-500': '#2a1c77',
			'pink-100': '#e5d3eb',
			'pink-200': '#caa3d6',
			'pink-300': '#b784c6',
		  }
		},
		blur: {
		  xs: '2px',
		},
		animation: {
		  'float': 'float 6s ease-in-out infinite',
		  'float-slow': 'float 8s ease-in-out infinite',
		  'float-slower': 'float 10s ease-in-out infinite',
		  marquee: 'marquee 20s linear infinite',
		},
		keyframes: {
		  float: {
			'0%, 100%': { transform: 'translateY(0)' },
			'50%': { transform: 'translateY(-20px)' },
		  },
		  marquee: {
			'0%': { transform: 'translateX(0%)' },
			'100%': { transform: 'translateX(-100%)' },
		  },
		},
		backgroundImage: {
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  'gradient-hero': 'linear-gradient(to bottom, #473dc6, #2a1c77)',
		}
	  }
	},
	plugins: [require("tailwindcss-animate")],
  }