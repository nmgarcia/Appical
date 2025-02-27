import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import styles from "./Layout.module.css";
import { DashboardLayout, PageContainer } from "@toolpad/core";

const Layout: React.FC = () => {
  const location = useLocation(); // Obtener la ruta actual

  // Determinar si estamos en una página de dashboard
  const isDashboardRoute = ["/client-dashboard", "/admin-dashboard"].includes(
    location.pathname
  );

  return (
    <Box className={styles.pageWrapper}>
      {isDashboardRoute ? (
        <DashboardLayout>
          <PageContainer>
            <Outlet /> {/* Renderiza CustomerDashboard o AdminDashboard */}
          </PageContainer>
        </DashboardLayout>
      ) : (
        <>
          {/* Header */}
          <AppBar position="static" className={styles.header}>
            <Toolbar className={styles.toolbar}>
              <Box className={styles.logoContainer}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50 10C50 10 40 30 20 40C10 45 20 60 30 70C40 80 60 80 70 70C80 60 90 45 80 40C60 30 50 10 50 10Z"
                    fill="#2E7D32"
                  />
                  <path
                    d="M50 20C50 20 45 35 35 45C30 50 35 60 45 65C55 70 65 65 70 60C75 50 70 35 65 30C60 25 50 20 50 20Z"
                    fill="#4CAF50"
                  />
                </svg>
                <Typography variant="h6" className={styles.logoText}>
                  Appical
                </Typography>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                className={styles.loginButton}
              >
                Iniciar Sesión
              </Button>
            </Toolbar>
          </AppBar>
          <Box component="main" className={styles.content}>
            <Outlet /> {/* Renderiza LandingPage o Login */}
          </Box>
        </>
      )}

      {/* Footer */}
      <Box component="footer" className={styles.footer}>
        <Typography variant="body2" color="white">
          © 2025 Appical - Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
