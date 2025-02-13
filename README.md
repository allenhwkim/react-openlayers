# React + OpenLayers

* ol/Map

  This module is the core component that represents the map itself. It manages layers, controls, interactions, and the overall rendering of the map. Essentially, it is the container for all map-related elements.

* ol/Overlay

  This is used to add HTML elements to the map at specific coordinates. Overlays are not part of the map’s layer stack and do not participate in the map’s rendering process. Instead, they are positioned on top of the map and can be used for things like popups, tooltips, and other HTML-based elements.

## Controls

This module is the core component that represents the map itself. It manages layers, controls, interactions, and the overall rendering of the map. Essentially, it is the container for all map-related elements.

* DONE ol/control/Attribution: Displays attribution information for the map layers.
* N/A  ol/control/Control: Base class for creating custom controls.
* N/A  ol/control/defaults: A function that returns a collection of default controls.
* DONE ol/control/FullScreen: Adds a button to toggle full-screen mode.
* DONE ol/control/MousePosition: Displays the current mouse position in coordinates.
* ol/control/OverviewMap: Displays an overview map of the main map.
* ol/control/Rotate: Adds a button to reset the map rotation to zero.
* DONE ol/control/ScaleLine: Displays a scale line on the map.
* ol/control/Zoom: Adds zoom in and zoom out buttons.
* ol/control/ZoomSlider: Adds a slider for zooming.
* ol/control/ZoomToExtent: Adds a button to zoom to a specific extent.

## Interactions

Interactions are behaviors that allow users to interact with the map in various ways, such as panning, zooming, and drawing.

* ol/interaction/DoubleClickZoom: Allows zooming by double-clicking on the map.
* ol/interaction/DragAndDrop: Allows dragging and dropping files onto the map to load data.
* ol/interaction/DragBox: Allows drawing a box by clicking and dragging.
* ol/interaction/DragPan: Allows panning the map by dragging.
* ol/interaction/DragRotate: Allows rotating the map by dragging.
* ol/interaction/DragRotateAndZoom: Allows rotating and zooming the map by dragging.
* ol/interaction/DragZoom: Allows zooming to a box drawn by dragging.
* DONE ol/interaction/Draw: Allows drawing geometries on the map.
* ol/interaction/Extent: Allows modifying the extent of a geometry.
* ol/interaction/KeyboardPan: Allows panning the map using keyboard arrows.
* ol/interaction/KeyboardZoom: Allows zooming the map using keyboard keys.
* ol/interaction/Link: Synchronizes the map view with the URL.
* DONE ol/interaction/Modify: Allows modifying existing geometries.
* ol/interaction/MouseWheelZoom: Allows zooming the map using the mouse wheel.
* ol/interaction/PinchRotate: Allows rotating the map using pinch gestures.
* ol/interaction/PinchZoom: Allows zooming the map using pinch gestures.
* ol/interaction/Pointer: Base class for pointer interactions.
* ol/interaction/Select: Allows selecting features on the map.
* DONE ol/interaction/Snap: Allows snapping geometries to other geometries.
* ol/interaction/Translate: Allows translating (moving) features on the map. 

## Layers

Layers are used to display various types of map data. They are part of the map’s rendering process and are managed by the map’s layer stack.

* N/A ol/layer/Base: The base class for all layers.
* ol/layer/BaseImage: Base class for image layers.
* N/A ol/layer/BaseTile: Base class for tile layers.
* N/A ol/layer/BaseVector: Base class for vector layers.
* ol/layer/Graticule: Displays a graticule (grid of latitude and longitude lines) on the map.
* ol/layer/Group: A group of layers that can be treated as a single layer.
* ol/layer/Heatmap: Displays a heatmap based on vector data.
* ol/layer/Image: Displays single, static images.
* ol/layer/Layer: The base class for all layers, providing common functionality.
* DONE ol/layer/Tile: Displays tiled images, such as those from a tile server.
* DONE ol/layer/Vector: Displays vector data, such as points, lines, and polygons.
* ol/layer/VectorImage: Displays vector data as images.
* ol/layer/VectorTile: Displays vector tiles, which are vector data divided into tiles.
* ol/layer/WebGLTile: Displays tiled images using WebGL for rendering.

## FAQ

* Error: 
  ```
  The file does not exist at "<PROJECT_PATH>/node_modules/.cache/storybook/a6871e0c26d33fcbda0875414a230db7277d874a67a0ffb34bdf44755e21997a/sb-vite/deps/chunk-WMAVEDOJ.js?v=78430ec4" which is in the optimize deps directory.  The dependency might be incompatible with the dep optimizer. Try adding it to `optimizeDeps.exclude`
  ```
  A: Disable browser cache
