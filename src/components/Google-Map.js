import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const extractLatLngFromLink = (link) => {
  const match = link.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
  if (match) {
    const [, lat, lng] = match;
    return { lat: parseFloat(lat), lng: parseFloat(lng) };
  }
  return { lat: 0, lng: 0 }; // Default to (0,0) if no coordinates found
};

const MapComponent = withScriptjs(
  withGoogleMap(({ googleMapLink }) => (
    <GoogleMap defaultZoom={17} defaultCenter={extractLatLngFromLink(googleMapLink)}>
      <Marker position={extractLatLngFromLink(googleMapLink)} />
    </GoogleMap>
  ))
);

const MyMap = ({ googleMapLink }) => (
  <MapComponent
    googleMapURL={'https://www.google.com/maps/place/Webskitters+Technology+Solutions+Pvt.+Ltd./@22.5752084,88.4248596,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0275927b0061ad:0x496c2fab98874c86!8m2!3d22.5752084!4d88.4274345!16s%2Fg%2F12mj7h6sj?entry=ttu'}
    loadingElement={<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '400px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
    googleMapLink={googleMapLink}
  />
);

export default MyMap;
