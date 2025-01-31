import tailwindAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */

export default {
    darkMode: ["class"],
    content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
				primaryColor : '#645986',
				// primaryColor : '#F3814B',
				accentColor : '#81EBE4',
				// primaryColor : '#FF6363',
			}
  	}
  },
  plugins: [tailwindAnimate],
}

