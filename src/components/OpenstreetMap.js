import { MapContainer, TileLayer, useMap, GeoJSON } from "react-leaflet";
import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { Box } from "@mui/material";
import useDataContext from "@/context/Datalayer";

const defaultMarkerIcon = "/assets/marker.png";
const defaultCenter = [25.3187, 83.0];
const defaultZoomLevel = 12;
const maxZoomLevel = 18;
const WardZonesPath = "/Ward_Boundary.geojson";

export default function Map({
  wayPoints,
  zoomLevel,
  onFeatureClick,
  showZoneLayer,
}) {
  const [data, dispatch] = useDataContext();
  const [WardZones, setWardZones] = useState(null);
  const [zonesWithBusStops, setZonesWithBusStops] = useState([]);

  // ==================== USEEFFECTS ==========================
  useEffect(() => {
    // Load the GeoJSON data using fetch or axios
    fetch(WardZonesPath)
      .then((response) => response.json())
      .then((data) => {
        setWardZones(data);
        // console.log(data.features);
      })
      .catch((error) => {
        console.error("Error loading GeoJSON data:", error);
      });
  }, []);

  useEffect(() => {
    let zones = data?.zones_demand;
    let temp = zones.filter((item) => !item.is_predicted);
    setZonesWithBusStops(temp);
  }, []);

  // ==================== HELPER FUNCTIONS ===========================
  const handleFeatureClick = (event) => {
    const feature = event.target.feature;
    if (onFeatureClick) onFeatureClick(feature);
  };

  const getFeatureStyle = (feature) => {
    const W_NUM = feature.properties.W_NUM;
    let fillColor = "blue";

    if (zonesWithBusStops?.find((item) => item.W_NUM == W_NUM)) {
      fillColor = "green";
    }

    return {
      fillColor: fillColor,
      color: "black",
      weight: 0.5,
      fillOpacity: 0.3,
    };
  };

  return (
    <Box
      sx={{
        width: "auto",
        height: "80vh",
        margin: "auto",
      }}
    >
      <MapContainer
        id="map"
        classsName="map"
        center={defaultCenter}
        zoom={zoomLevel || defaultZoomLevel}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
        maxZoom={maxZoomLevel}
      >
        <RoutingMachine wayPoints={wayPoints} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showZoneLayer && WardZones && (
          <GeoJSON
            data={WardZones}
            style={getFeatureStyle}
            onEachFeature={(_, layer) => {
              layer.on({
                click: handleFeatureClick,
              });
            }}
          />
        )}
      </MapContainer>
    </Box>
  );
}

const RoutingMachine = ({ wayPoints }) => {
  let map = useMap();
  const controls = useRef(null);

  const customdefaultMarkerIcon = new L.Icon({
    iconUrl: defaultMarkerIcon,
    iconSize: [25, 35],
    iconAnchor: [5, 30],
  });

  const clearDirectionsAndMarkers = () => {
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        map.removeLayer(layer);
      }
    });
  };

  const updateDirectionsAndMarkers = (wayPoints) => {
    clearDirectionsAndMarkers();

    if (!map || !wayPoints?.length) return;
    let markers = wayPoints
      .filter((wayPoint) => wayPoint?.show)
      .map((wayPoint) => {
        let marker = L.marker(L.latLng(wayPoint?.lat, wayPoint?.lng), {
          icon: wayPoint?.icon || customdefaultMarkerIcon,
        })
          .addTo(map)
          .bindPopup(wayPoint?.label); // Do not open the popup by default
        if (wayPoint?.show) {
          marker.openPopup();
        }
        marker.on("mouseover", function () {
          this.openPopup();
        });
        // Close popup on mouseout
        marker.on("mouseout", function () {
          this.closePopup();
        });
        return marker;
      });

    let wayPointsCoordinates = wayPoints.map((wayPoint) =>
      L.latLng(wayPoint?.lat, wayPoint?.lng)
    );
    controls.current.setWaypoints(wayPointsCoordinates);

    // Adjust marker size on zoom
    map.on("zoomend", () => {
      const zoomLevel = map.getZoom();
      let iconSize = Math.max(10, 30 - zoomLevel); // Adjust scaling as needed
      markers?.forEach((marker) => {
        const updatedIcon = marker.options.icon;
        updatedIcon.options.iconSize = [iconSize, iconSize];
        updatedIcon.options.iconAnchor = [iconSize / 2 + 2.5, iconSize + 2.5];
        updatedIcon.options.popupAnchor = [0, -iconSize - 5];
        marker.setIcon(updatedIcon);
      });
    });
  };

  // Create the routing-machine instance:
  useEffect(() => {
    if (!map) return;

    controls.current = L.Routing.control({
      position: "topleft", // Where to position control on map
      lineOptions: {
        styles: [
          {
            color: "#8B0000",
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
      onRoutesFound: function (routes) {
        const bounds = routes[0].bounds;
        map.fitBounds(bounds);
      },
    }).addTo(map);
  }, [map]);

  useEffect(() => {
    updateDirectionsAndMarkers(wayPoints);
  }, [wayPoints]);

  return null;
};
