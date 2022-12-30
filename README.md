# Tailwind CSS Starter Kit
## Hi There 👋 !

This is Tailwind CSS Starter Kit to help you get started quickly with a new Web project using Tailwind CSS installed with Vite.

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Installation
### Clone the repository
```
git clone https://github.com/ciphersweet/tailwind-starter-kit.git
```

### Install npm dependencies
```
npm install
```

### Customise your `tailwind.config.cjs`
Example
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {},
  },
  plugins: [],
}
```

### Kickoff the dev server
```
npm run dev
```

## Recommended VS Code Setup
An `extension.json` file is included with this repository to help [VS Code](https://code.visualstudio.com/) install the recommanded extensions for this starter kit:
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) 
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Have fun!
