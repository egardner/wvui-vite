# WVUI-vite

Takes the `/src` files from [wvui](https://github.com/wikimedia/wvui) and
builds them with Vite instead of Webpack.

This project takes advantage of Vite's [library mode](https://vitejs.dev/guide/build.html#library-mode) feature.

Check the contents of `/dist` for the output.

This project supports Vue2 but **not** IE11.

## Build

```
npm run build
```