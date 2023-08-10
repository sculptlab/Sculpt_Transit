import { MapContainer, TileLayer, useMap } from "react-leaflet";
import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

const markerIcon = "assets/marker.png";

const defaultCenter = [25.267878, 82.990494];

export default function Map({ origin, destination }) {
  return (
    <MapContainer
      classsName="map"
      center={defaultCenter}
      zoom={30}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "100%" }}
    >
      <RoutingMachine origin={origin} destination={destination} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

const RoutingMachine = ({ origin, destination }) => {
  let map = useMap();
  const controls = useRef(null);

  const customMarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [25, 35],
    iconAnchor: [5, 30],
  });

  // useEffect(() => {
  //   if (origin && destination) {
  //     let center = [origin?.lat, origin?.lng];
  //     map.setView(center, 15);
  //   }
  // }, [origin, destination]);

  const clearDirectionsAndMarkers = () => {
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });
  };

  const updateDirectionsAndMarkers = (origin, destination) => {
    clearDirectionsAndMarkers();

    if (!map || !origin || !destination) return;
    const markersData = [origin, destination];
    markersData.forEach((markerData) => {
      let marker = L.marker(L.latLng(markerData?.lat, markerData?.lng), {
        icon: customMarkerIcon,
      })
        .addTo(map)
        .bindPopup(markerData?.label); // Do not open the popup by default
      // Open popup on mouseover
      marker.on("mouseover", function () {
        this.openPopup();
      });
      // Close popup on mouseout
      marker.on("mouseout", function () {
        this.closePopup();
      });
    });
    let wayPoints = markersData.map((data) => L.latLng(data?.lat, data?.lng));
    controls.current.setWaypoints(wayPoints);
  };

  // Create the routing-machine instance:
  useEffect(() => {
    if (!map) return;

    controls.current = L.Routing.control({
      position: "topleft", // Where to position control on map
      lineOptions: {
        styles: [
          {
            color: "#757de8",
          },
        ],
      },
      createMarker: () => null,
      show: false,
      addWaypoints: false,
      routeWhileDragging: true,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
    }).addTo(map);
  }, [map]);

  useEffect(() => {
    if (!map || !origin || !destination) return;
    updateDirectionsAndMarkers(origin, destination);
  }, [origin, destination]);

  return null;
};
