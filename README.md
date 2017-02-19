# ol-react

OpenLayer + Typescript  + React

### To start

    $ git clone https://github.com/allenhwkim/ol-react.git
    $ cd ol-react
    $ npm install
    $ npm start

### List of available npm tasks

  * `npm run` : List all available tasks
  * `npm start`: Run `app` directory for development using `webpack-dev-server` with port 9001
  * `npm run clean`: Remove dist folder
  * `npm run clean:dist`: Clean up unnecessary dist folder within dist and app directory
  * `npm run build:umd`: Build UMD module `ng2-map.umd.js`
  * `npm run build:app`: Build `app/build/app.js` for runnable examples
  * `npm run build`: Build all(build:ngc, build:umc, build:app, and clean:dist)
