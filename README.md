# Vite template

Made by [**minh711**](https://github.com/minh711) (can also be called [**dm711**](https://github.com/minh711)).

## 🪴 How to use this template

Before starting, search for `vite-template` (`Ctrl` + `Shift` + `F`) then rename it with your project name.

![image](https://github.com/user-attachments/assets/2bd5300b-42c4-4276-925f-f1783d8f056b)

Then `npm i` as ussual.

## 📚 Folder structure

1. `api`: store connect API logic code.
2. `assets`: build in, store assets.
3. `components`: store global components for reuse.
4. `constants`: store global constants.
5. `hooks`: store customized hooks.
6. `i18n`: for using translation if needed.
7. `layouts`: store global layouts.
8. `locales`: pair with `i18n` if used translation feature.
9. `pages`: store all page.
10. `routes`: store routes.
11. `style`: store global `CSS` styles.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
