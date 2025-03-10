"use client";

import { useState } from "react";
import { Table, Text } from "@mantine/core";
//import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api"

// Datos mockeados de direcciones de pedidos
const orderAddresses = [
  { id: "1", address: "Calle 123, Ciudad A", lat: -34.6037, lng: -58.3816 },
  { id: "2", address: "Avenida 456, Ciudad B", lat: -34.608, lng: -58.3706 },
  { id: "3", address: "Plaza 789, Ciudad C", lat: -34.5997, lng: -58.3832 },
];

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -34.6037,
  lng: -58.3816,
};

export default function RouteOptimization() {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Reemplaza con tu clave de API de Google Maps
  // })

  const [map, setMap] = useState(null);

  const onLoad = (map: any) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <>
      <Text size="xl" fw={700} mb="md">
        Optimización de Rutas
      </Text>
      <Table mb="xl">
        <thead>
          <tr>
            <th>ID de Pedido</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {orderAddresses.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {orderAddresses.map((order) => (
            <Marker key={order._id} position={{ lat: order.lat, lng: order.lng }} />
          ))}
        </GoogleMap>
      ) : (
        <Text>Cargando mapa...</Text>
      )} */}
    </>
  );
}
