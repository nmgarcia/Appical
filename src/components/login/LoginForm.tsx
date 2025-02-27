import { Button, Card, CardContent, TextField } from "@mui/material";
import React, { useState } from "react";

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  error: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, error }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <Card>
      <CardContent
        style={{ display: "flex", flexDirection: "column", gap: 16 }}
      >
        <TextField
          label="Usuario"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Contraseña"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="error">{error}</div>}
        <Button onClick={handleSubmit}>Ingresar</Button>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
