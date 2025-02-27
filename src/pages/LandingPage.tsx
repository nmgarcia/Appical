import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styles from "./LandingPage.module.css";

const LandingPage: React.FC = () => {
  return (
    <Box className={styles.container}>
      {/* Hero Section */}
      <Box className={styles.heroSection}>
        <Typography variant="h2" className={styles.heroTitle}>
          Cultiva el Futuro con Appical
        </Typography>
        <Typography variant="h6" className={styles.heroSubtitle}>
          Conecta con productos frescos y sostenibles directamente desde el
          campo a tu mesa.
        </Typography>
        <Button variant="contained" className={styles.heroButton}>
          Descubre Más
        </Button>
      </Box>

      {/* Quienes Somos Section */}
      <Box className={styles.quienesSomosSection}>
        <Typography variant="h3" className={styles.sectionTitle}>
          ¿Quiénes Somos?
        </Typography>
        <Grid container spacing={4} alignItems="center">
          {/* En móvil, la imagen aparece primero */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className={styles.imagePlaceholder}>
              {/* Puedes eliminar esto ya que la imagen está en el CSS */}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body1" className={styles.sectionText}>
              Somos una plataforma innovadora que une a agricultores y
              consumidores. Nuestro objetivo es promover la agricultura
              sostenible y tecnológica, llevando productos frescos a tu hogar
              con eficiencia y cuidado. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Nuestro Proceso Section */}
      <Box className={styles.procesoSection}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Nuestro Proceso
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Box className={styles.stepBox}>
              <Typography variant="h5" className={styles.stepTitle}>
                1. Cultivo
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
                ad minim veniam.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box className={styles.stepBox}>
              <Typography variant="h5" className={styles.stepTitle}>
                2. Distribución
              </Typography>
              <Typography variant="body2">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box className={styles.stepBox}>
              <Typography variant="h5" className={styles.stepTitle}>
                3. Entrega
              </Typography>
              <Typography variant="body2">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Registro Section */}
      <Box className={styles.registroSection}>
        <Typography variant="h4" className={styles.registroText}>
          ¿Te interesa nuestro proceso? ¡Regístrate!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={styles.registroButton}
        >
          Regístrate Ahora
        </Button>
      </Box>

      {/* Contacto Section */}
      <Box className={styles.contactoSection}>
        <Typography variant="h3" className={styles.sectionTitle}>
          Contáctanos
        </Typography>
        <Box component="form" className={styles.contactForm}>
          <TextField
            label="Nombre"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            type="email"
          />
          <TextField
            label="Consulta"
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
          />
          <Button variant="contained" className={styles.submitButton}>
            Enviar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
