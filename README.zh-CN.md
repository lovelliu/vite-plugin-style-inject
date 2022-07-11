# vite-plugin-style-inject

[![NPM version](https://img.shields.io/npm/v/vite-plugin-style-inject?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-style-inject)

**[English](./README.md)** ｜ **[中文](./README.zh-CN.md)**

该插件用于将CSS注入到JS文件中，因此不会生成CSS文件。
它主要用于打包一些样式较少的库，例如一个被封装的组件。

使用该库的用户将**不需要额外引入样式文件**。

- 使用之前

```ts
import xxxComponent from 'xxx-component';
import 'xxx-component/dist/xxx.css';
```
- 使用之后
```ts
import xxxComponent from 'xxx-component';
```

## 安装

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
## 使用
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
