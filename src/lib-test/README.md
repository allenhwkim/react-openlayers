Start a react application by using lib files after build, 
`../dist/index.js` and `../dist/index.css`, to make sure index.js
and index.css are well-built and working before publishing.

To start this test, it needs;

 * index.html
 * vite.config.ts
 * main.tsx, which start App.tsx

To start
```
$ npm run libtest
```