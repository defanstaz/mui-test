import React from "react";
import "./styles.css";

import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";

const containerStyle = {
    width: '100%',
    height: '70%'
}

// implementation of this function is needed for codesandbox example to work
// you can remove it otherwise
const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const points = [
  { id: 1, title: "Houston-The Woodlands-Sugar Land, TX", lat: 29.760, lng: -95.369 },
  { id: 2, title: "Denver-Aurora-Lakewood, CO", lat: 39.739235, lng: -104.990250 },
  { id: 3, title: "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD", lat: 39.94296, lng: -75.15937 },
  { id: 4, title: "Seattle-Tacoma-Bellevue, WA", lat: 47.60383, lng: -122.33006 },
  { id: 5, title: "Portland-Vancouver-Hillsboro, OR-WA", lat: 45.52025, lng: -122.67419 },
  { id: 6, title: "Dallas-Fort Worth-Arlington, TX", lat: 32.77627, lng: -96.79686 },
  { id: 7, title: "Pittsburgh, PA", lat: 32.99540, lng: -94.96577 },
  { id: 8, title: "Nashville-Davidson--Murfreesboro--Franklin, TN", lat: 36.16228, lng: -86.77430 },
  { id: 9, title: "Cleveland-Elyria, OH", lat: 41.49966, lng: -81.69368 },
  { id: 10, title: "Columbus, OH", lat: 39.96226, lng: -83.00071 }
];

export default function App() {
  return (
    <div className="App">
      <GoogleMapReact
        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: "AIzaSyBBcuYB7nVS0tsflK2MAoVjP---h7MRC5Y",
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat: 39.828, lng: -98.579 }}
        defaultZoom={4.8}
        distanceToMouse={distanceToMouse}
        mapContainerStyle={containerStyle}
      >
        {points.map(({ lat, lng, id, title }) => {
          return (
            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
