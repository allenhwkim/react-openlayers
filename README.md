# React components for OpenLayers

A minimal React wrapper of [OpenLayers 10](https://openlayers.org/)
written in [TypeScript](https://www.typescriptlang.org/)

![Image](https://github.com/user-attachments/assets/9dfc9102-4952-4c56-a76b-19699a5a4570)

## Install
```
npm install react-openlayers --save-dev
```

## Example
```typescript
import * as ol from 'ol';
import { OSM } from 'ol/source';
import { Map, View, TileLayer } from 'react-openlayers';
import 'react-openlayers/dist/index,css'; // for css

export default function(props) {
  const mapRef= useRef<ol.Map>();
  setTimeout(() => console.log(olMap.current), 1000));

  return ( 
    <Map ref={mapRef} controls={[]} interactions={[]}>
      <TileLayer source={new OSM()} />
      <View center={[-10997148, 4569099]} zoom={4}/>
    </Map>
  );
}
```

### Base
| Object     | Component    | Description  | 
| ------     | ---------    | ------------ |
| ol/Map     | `<Map />`    | It manages layers, controls, interactions, and the overall rendering of the map. |
| ol/Overlay | `<Overlay />`| It add HTML elements to the map at specific coordinates. |
| ol/View    | `<View />`   | A View object represents a simple 2D view of the map |
| ol/Feature | `<Marker />` | ol/Feature customized as a map maker. |

### Layers
| Object     | Component     | Description  | 
| ------     | ---------     | ------------ |
| ol/layer/Graticule |  `<GraticuleLayer />` | Displays a graticule (grid of latitude and longitude lines) on the map. |
| ol/layer/Heatmap |  `<HeatmapLayer />` | Displays a heatmap based on vector data. |
| ol/layer/Tile |  `<TileLayer />` | Displays tiled images, such as those from a tile server. |
| ol/layer/Vector |  `<VectorLayer />` | Displays vector data, such as points, lines, and polygons. |
| ol/layer/WebGLTile |  `<WebGLLayer />` | Displays tiled images using WebGL for rendering. |

### Controls
| Object     | Component     | Description  | 
| ------     | ---------     | ------------ |
| ol/control/Attribution   | `<AttributionControl />`   | Displays attribution information for the map layers |
| ol/control/FullScreen    | `<FullScreenControl />`    | Adds a button to toggle full-screen mode |
| ol/control/MousePosition | `<MousePositionControl />` | Displays the current mouse position in coordinates |
| ol/control/OverviewMap   | `<OverviewMapControl />`   | Displays an overview map of the main map |
| ol/control/ScaleLine     | `<ScaleLineControl />`     | Displays an overview map of the main map |

### Interactions
| Object     | Component     | Description  | 
| ------     | ---------     | ------------ |
| ol/interaction/DragRotateAndZoom| `<DragRotateAndZoomInteraction />` | Allows rotating and zooming the map by dragging. |
| ol/interaction/Draw | `<DrawInteraction />` | Allows drawing geometries on the map.|
| ol/interaction/Link | `<LinkInteraction />` | Synchronizes the map view with the URL. |
| ol/interaction/Modify | `<ModifyInteraction />` | Allows modifying existing geometries. |
| ol/interaction/Pointer | `<PointerInteraction />` | Base class for pointer interactions. |
| ol/interaction/Select | `<SelectInteraction />` | Allows selecting features on the map. |
| ol/interaction/Snap | `<SnapInteraction />` | Allows snapping geometries to other geometries. |
| ol/interaction/Translate | `<TranslateInteraction />` | Allows translating (moving) features on the map. |
