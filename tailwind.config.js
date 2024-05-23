const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
      'ditto':"url('https://media.giphy.com/media/lUqXH0qR5Bh39EAoGQ/giphy.gif')"
      },
      'animation': {
        'text':'text 5s ease infinite',
    },
    'keyframes': {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
    }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

