"use client";

import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

export default function Map() {
  const ICON = icon({
    iconUrl: "/faq/marker-icon.svg",
  });

  return (
    <MapContainer
      className="z-0 h-96 w-full"
      center={[35.762, 51.405]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={ICON} position={[35.762, 51.405]}></Marker>
    </MapContainer>
  );
}
