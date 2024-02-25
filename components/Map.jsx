import React from "react";
import GoogleMapReact from 'google-map-react';
import uDonate from "@/public/udonate.png"
const AnyReactComponent = ({ text }) => <div style={{color:"red", }}> <div className="bg-red-500">
    Bazinggga</div> Hello I am a marker {text}</div>;

export default function Map(){
    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 12
    };

    const markers = [
        { id: 1, lat: 10.99835602, lng: 77.01502627, text: "Marker 1" },
        { id: 2, lat: 10.988, lng: 77.025, text: "Marker 2" },
        // Add more markers as needed
      ];
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }} className="relative">
        

        <div className="p-4 absolute m-8 top-0 left-0 z-20 rounded-lg bg-white">
          <img className="h-12" src={uDonate.src} alt="" />
        </div>
        
        <div className="absolute w-full flex gap-8 justify-center p-8 top-0 left-0 z-20">
          <div className="bg-white rounded-md px-3 py-1 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L7 17L2 12" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 10L14.5 17.5L13 16" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="bg-white flex gap-4 items-center px-3 py-1 rounded-md text-gray-300 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L7 17L2 12" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 10L14.5 17.5L13 16" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>
              Medicines
            </span>

          </div>
          <div className="bg-white flex gap-4 items-center px-3 py-1 rounded-md text-gray-300 cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L7 17L2 12" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 10L14.5 17.5L13 16" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>
              Clothes
            </span>
            
          </div>
          <div className="bg-white flex gap-4 items-center px-3 py-1 rounded-md text-gray-300 cursor-pointer">
            
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L7 17L2 12" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 10L14.5 17.5L13 16" stroke="#E4E4E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>
              Books
            </span>
          </div>
        </div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAuPeqCsJovXZi8nBE5A54Or1PjisNxf_Y" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={10.99835602}
            lng={77.01502627}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }

// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyAuPeqCsJovXZi8nBE5A54Or1PjisNxf_Y"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MyComponent)