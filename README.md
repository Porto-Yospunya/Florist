# Florist
This is my florist website template using ReactJS Typescript

<br>

## Install Commend
``` 
$ npm install -D tailwindcss postcss autoprefixer @tanstack/router-devtools @tanstack/router-plugin
```

```
$ npm install framer-motion react-icons @tanstack/react-router
```

<br>

## Tanstack setup
``` javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
  ],
});
```

<br>

## Tailwindcss setup
```
$ npx tailwindcss init
```

#### tailwindcss.config.js
``` javascript
/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {},
};
export const plugins = [];
```

#### postcss.config.js
``` javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### index.css
``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```