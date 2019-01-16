import React from 'react';
import { Marker, MarkerWrapper, MarkerCenter } from './elements';

const MapMarker = ({ lat, lng }) => (
  <MarkerWrapper lat={lat} lng={lng}>
    <Marker>
      <MarkerCenter />
    </Marker>
  </MarkerWrapper>
);

export default MapMarker;
