# vite-plugin-style-inject

[![NPM version](https://img.shields.io/npm/v/vite-plugin-style-inject?color=3ca4ce)](https://www.npmjs.com/package/vite-plugin-style-inject)

English | **[中文](./README.zh-CN.md)**

The plugin is used to inject CSS into JS files, so there will not generate CSS files.
It is mainly used to pack some libraries with fewer styles, for example, A component that has been encapsulated.

The user using the library will not need to import an additional CSS file.

- Before

```ts
import xxxComponent from 'xxx-component';
import 'xxx-component/dist/xxx.css';
```
- Now
```ts
import xxxComponent from 'xxx-component';
```

## Install

- npm

```bash
npm i vite-plugin-style-inject --save-dev
```
- yarn 
```bash
yarn add -D vite-plugin-style-inject
```

- pnpm

```bash
pnpm add -D vite-plugin-style-inject
```
## Usage
```ts
// vite.config.ts
import { defineConfig } from 'vite';

import VitePluginStyleInject from 'vite-plugin-style-inject';

export default defineConfig({
  plugins: [VitePluginStyleInject()],
  ......
});
```

## License

[MIT](./LICENSE) License © 2022 [Name6](https://github.com/lhj-web)
