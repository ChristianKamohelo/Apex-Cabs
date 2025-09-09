module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Luxury Gold
        primary: {
          DEFAULT: "#FFD700", // gold-500 - luxury gold for CTAs and conversion moments
          50: "#FFFEF7", // gold-50
          100: "#FFFBEB", // gold-100
          200: "#FFF4CC", // gold-200
          300: "#FFEB99", // gold-300
          400: "#FFE066", // gold-400
          500: "#FFD700", // gold-500
          600: "#E6C200", // gold-600
          700: "#CCAD00", // gold-700
          800: "#B39900", // gold-800
          900: "#998500", // gold-900
        },
        
        // Secondary Colors - Sophisticated Charcoal
        secondary: {
          DEFAULT: "#2C2C2C", // gray-800 - sophisticated charcoal for section backgrounds
          50: "#F9F9F9", // gray-50
          100: "#F3F3F3", // gray-100
          200: "#E6E6E6", // gray-200
          300: "#CCCCCC", // gray-300
          400: "#999999", // gray-400
          500: "#666666", // gray-500
          600: "#4D4D4D", // gray-600
          700: "#333333", // gray-700
          800: "#2C2C2C", // gray-800
          900: "#1A1A1A", // gray-900
        },
        
        // Accent Colors
        accent: "#FFFFFF", // white - pure white for premium contrast and text clarity
        
        // Background Colors
        background: "#1A1A1A", // gray-900 - deep luxury black for premium positioning
        surface: "#262626", // gray-800 - elevated dark surface for cards and sections
        
        // Text Colors
        text: {
          primary: "#FFFFFF", // white - maximum contrast for effortless scanning
          secondary: "#B8B8B8", // gray-400 - supporting text without distraction
        },
        
        // Status Colors
        success: "#00C851", // green-500 - positive reinforcement for form completions
        warning: "#FF8800", // orange-500 - scarcity indicators for limited inventory
        error: "#FF4444", // red-500 - form validation clarity only
        
        // Border Colors
        border: "#333333", // gray-700 - minimal borders for form fields and sections
      },
      
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Headlines and CTAs
        'open-sans': ['Open Sans', 'sans-serif'], // Body text
        playfair: ['Playfair Display', 'serif'], // Luxury accents and testimonials
        sans: ['Open Sans', 'sans-serif'], // Default sans-serif
        serif: ['Playfair Display', 'serif'], // Default serif
      },
      
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      
      boxShadow: {
        'luxury': '0 8px 24px rgba(0, 0, 0, 0.4)', // Vehicle image cards and premium elements
        'cta': '0 4px 12px rgba(255, 215, 0, 0.3)', // CTA buttons
        'cta-hover': '0 6px 16px rgba(255, 215, 0, 0.4)', // CTA buttons on hover
      },
      
      transitionDuration: {
        '250': '250ms', // Standard luxury transitions
        '300': '300ms', // Scroll-triggered animations
      },
      
      transitionTimingFunction: {
        'luxury': 'ease-in-out', // Smooth luxury feel
      },
      
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      
      borderWidth: {
        '1': '1px', // Minimal borders for luxury aesthetic
      },
      
      spacing: {
        '18': '4.5rem', // Custom spacing for luxury layouts
        '22': '5.5rem',
        '26': '6.5rem',
      },
    },
  },
  plugins: [],
}