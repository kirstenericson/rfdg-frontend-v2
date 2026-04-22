import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../auth/AuthProvider";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <FormControl sx={{ width: "100%", mb: 2 }}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <TextField
            id="username"
            type="text"
            name="username"
            placeholder="username"
            autoComplete="username"
            autoFocus
            required
            fullWidth
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ width: "100%", mb: 2 }}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" fullWidth variant="contained">
          Sign in
        </Button>
      </Box>
      <Divider sx={{ my: 3 }} />
      <Typography sx={{ textAlign: "center", fontSize: "0.95rem" }}>
        Don&apos;t have an account? <Link to="/signup">Sign up</Link>
      </Typography>
    </>
  );
}
