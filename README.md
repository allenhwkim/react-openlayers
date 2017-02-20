# react-openlayer

A minimal [React](https://facebook.github.io/react/) 
wrapper of [OpenLayer 3+](https://openlayers.org/)
written in [TypeScript](https://www.typescriptlang.org/)

[DEMO](https://rawgit.com/allenhwkim/react-openlayer/master/app/index.html)

The simplese example(Not very useful though)
```
<Map></Map>
```

Example
```
<Map>
  <Layers>      <!-- TODO: layers in lower-case -->
    <layer.Tile source={new ol.source.OSM()} />
  </Layers>
  <Controls></Controls>
  <Interactions></Interactions>
  <Overlays></Overlays>
</Map>
```

It strictly follows [OpenLayer 3+ API documention](https://openlayers.org/en/latest/apidoc/)

## About Author
Allen Kim is the creator of [ngmap](https://github.com/allenhwkim/angularjs-google-maps) and
[ng2-map](https://github.com/ng2-ui/ng2-map).

### To start

    $ git clone https://github.com/allenhwkim/react-openlayer.git
    $ cd react-openlayer
    $ npm install
    $ npm start

### List of available npm tasks

  * `npm run` : List all available tasks
  * `npm start`: Run `app` directory for development using `webpack-dev-server` with port 9001
  * `npm run clean`: Remove dist folder
  * `npm run clean:dist`: Clean up unnecessary dist folder within dist and app directory
  * `npm run build:umd`: Build UMD module `react-openlayer.umd.js`
  * `npm run build:app`: Build `app/build/app.js` for runnable examples
  * `npm run build`: Build all(build:ngc, build:umc, build:app, and clean:dist)
