import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    if (username === "user" && password === "user") {
      // Redirigir al dashboard del cliente
      navigate("/client-dashboard");
    } else if (username === "admin" && password === "admin") {
      // Redirigir al dashboard de administración
      navigate("/admin-dashboard");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <LoginForm onLogin={handleLogin} error={error} />
    </div>
  );
};

export default Login;
