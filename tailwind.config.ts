import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'Onest',
  				'sans-serif'
  			]
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
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  			satin_sheen_gold: {
  				'100': '#291f0a',
  				'200': '#523d14',
  				'300': '#7a5c1f',
  				'400': '#a37a29',
  				'500': '#cc9933',
  				'600': '#d6ad5c',
  				'700': '#e0c285',
  				'800': '#ebd6ad',
  				'900': '#f5ebd6',
  				DEFAULT: '#cc9933'
  			},
  			black: {
  				'100': '#000000',
  				'200': '#000000',
  				'300': '#000000',
  				'400': '#000000',
  				'500': '#000000',
  				'600': '#333333',
  				'700': '#666666',
  				'800': '#999999',
  				'900': '#cccccc',
  				DEFAULT: '#000000'
  			},
  			saffron: {
  				'100': '#432d00',
  				'200': '#865a01',
  				'300': '#c98601',
  				'400': '#feae0f',
  				'500': '#fec652',
  				'600': '#fed175',
  				'700': '#fedc97',
  				'800': '#ffe8ba',
  				'900': '#fff3dc',
  				DEFAULT: '#fec652'
  			},
  			sunglow: {
  				'100': '#432e00',
  				'200': '#875c00',
  				'300': '#ca8a00',
  				'400': '#ffb30e',
  				'500': '#ffc853',
  				'600': '#ffd374',
  				'700': '#ffde97',
  				'800': '#ffe9ba',
  				'900': '#fff4dc',
  				DEFAULT: '#ffc853'
  			},
  			jasmine: {
  				'100': '#4a3200',
  				'200': '#946301',
  				'300': '#de9501',
  				'400': '#feb82c',
  				'500': '#fed175',
  				'600': '#feda91',
  				'700': '#ffe3ad',
  				'800': '#ffedc8',
  				'900': '#fff6e4',
  				DEFAULT: '#fed175'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			xl: 'var(--radius)',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			rotate: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'spin-slow': 'rotate 6s linear infinite'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;
