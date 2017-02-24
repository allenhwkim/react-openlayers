# react-openlayers

A minimal [React](https://facebook.github.io/react/) 
wrapper of [OpenLayer 3+](https://openlayers.org/)
written in [TypeScript](https://www.typescriptlang.org/)

[![image](https://cloud.githubusercontent.com/assets/1437734/23288537/3735daaa-fa12-11e6-8f4b-9f7f75869f98.png)](https://rawgit.com/allenhwkim/react-openlayers/master/app/index.html)


Example
```
    <Map view={{center: [0, 0], zoom: 2}} onClick={showPopup}>
      <Layers>
        <layer.Tile/>
        <layer.Vector source={markers} style={markers.style} />
      </Layers>
      <Overlays>
        <Overlay 
          ref={comp => this.overlayComp = comp}
          element="#popup" />
      </Overlays>
      <Controls attribution={false} zoom={true}>
        <control.Rotate />
        <control.ScaleLine />
        <control.FullScreen />
        <control.OverviewMap />
        <control.ZoomSlider />
        <control.ZoomToExtent />
        <control.Zoom />
      </Controls>
      <Interactions>
        <interaction.Select style={selectedMarkerStyle} />
        <interaction.Draw source={markers} type='Point' />
        <interaction.Modify features={markers.features} />
      </Interactions>
    </Map>

    <custom.Popup ref={comp => this.popupComp = comp}>
    </custom.Popup>
```

It strictly follows [OpenLayer 3+ API documention](https://openlayers.org/en/latest/apidoc/)

## About Author
Allen Kim is the creator of [ngmap](https://github.com/allenhwkim/angularjs-google-maps) and
[ng2-map](https://github.com/ng2-ui/ng2-map).

### To start

    $ git clone https://github.com/allenhwkim/react-openlayers.git
    $ cd react-openlayers
    $ npm install
    $ npm start

### List of available npm tasks

  * `npm run` : List all available tasks
  * `npm start`: Run `app` directory for development using `webpack-dev-server` with port 9001
  * `npm run clean`: Remove dist folder
  * `npm run clean:dist`: Clean up unnecessary dist folder within dist and app directory
  * `npm run build:umd`: Build UMD module `react-openlayers.umd.js`
  * `npm run build:app`: Build `app/build/app.js` for runnable examples
  * `npm run build`: Build all(build:ngc, build:umc, build:app, and clean:dist)
