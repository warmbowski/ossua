import * as React from 'react';
import * as L from 'leaflet';
import './Ossua.css';
import '../node_modules/leaflet/dist/leaflet.css';

class Ossua extends React.Component {
  componentDidMount() {
    const map = L.map('map_ossua', {
      crs: L.CRS.Simple,
    });
    const bounds: L.LatLngBoundsExpression = [[0, 0], [500, 500]];
    L.imageOverlay('ossua.jpg', bounds).addTo(map);

    map.fitBounds(bounds);
  }

  render() {
    return <div id="map_ossua" />;
  }
}

export default Ossua;
