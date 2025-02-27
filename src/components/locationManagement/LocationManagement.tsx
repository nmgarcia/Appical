import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import styles from "./LocationManagement.module.css";

const LocationManagement: React.FC = () => {
  const [address, setAddress] = useState("Av. Siempre Viva 123");
  const [lat, setLat] = useState("-34.6037");
  const [lng, setLng] = useState("-58.3816");

  const handleSaveLocation = () => {
    // Lógica para guardar la ubicación en la API
    alert(`Ubicación guardada: ${address}, Lat: ${lat}, Lng: ${lng}`);
  };

  return (
    <div className={styles.container}>
      <Typography variant="h5">Gestión de Ubicación</Typography>
      <TextField
        label="Dirección"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Latitud"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Longitud"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSaveLocation}>
        Guardar Ubicación
      </Button>
    </div>
  );
};

export default LocationManagement;
