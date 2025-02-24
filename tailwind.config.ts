import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			'space-mono': ['var(--font-space-mono)'],
			'space-grotesk': ['var(--font-space-grotesk)'],
			'eb-garamond': ['var(--font-eb-garamond)'],
			'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
		},
		typography: {
			DEFAULT: {
				css: {
					'h2': {
				  		fontSize: '1.125rem', // text-lg
						fontWeight: '700',    // font-semibold
						textAlign: 'left',  // text-center
						marginBottom: '0.5rem', // mb-2
						fontFamily: ['var(--font-space-grotesk)']
					},
					'h3': {
						fontSize: '.875rem', // smaller font size than h2
						fontWeight: '800',    // same font weight as h2
						textAlign: 'left',    // same alignment as h2
						marginBottom: '0.5rem', // same margin bottom as h2
						fontFamily: ['var(--font-space-grotesk)'] // same font family as h2
					}
			  	}
			}
		}
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	require('@tailwindcss/typography')
],
} satisfies Config;