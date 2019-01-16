import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';
import { MapWrapper } from './elements'

class Map extends Component<Props> {
  constructor(props) {
    super(props);
    this.googleApiKey = process.env.REACT_APP_GOOGLE_MAP_KEY;
  }

  render() {
    const { center, zoom, handleClick } = this.props

    return (
      <MapWrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: this.googleApiKey }}
          options={{ zoomControl: false, streetViewControl: false }}
          center={center}
          zoom={zoom}
          onClick={handleClick}
        >
          <MapMarker
            lat={center.lat}
            lng={center.lng}
          />
        </GoogleMapReact>
      </MapWrapper>
    );
  }
}

export default Map;
