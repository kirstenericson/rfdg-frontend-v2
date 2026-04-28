import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../auth/AuthProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Box component="form" onSubmit={handleSubmit} noValidate>
        <FormControl sx={{ width: "100%", mb: 2.5 }}>
          
          <FormLabel
            htmlFor="username"
            sx={{
              fontWeight: 600,
              mb: 1,
              color: "#262c34",
              fontSize: "0.95rem",
            }}
          >
            Username
          </FormLabel>
          <TextField
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              autoComplete="username"
              autoFocus
              required
              fullWidth
              variant="outlined"
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "primary.main",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
            />
        </FormControl>
        <FormControl sx={{ width: "100%", mb: 3 }}>
          <FormLabel
            htmlFor="password"
            sx={{
              fontWeight: 600,
              mb: 1,
              color: "#262c34",
              fontSize: "0.95rem",
            }}
          >
            Password
          </FormLabel>
          <TextField
            name="password"
            placeholder="Enter your password"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 1.5,
              },
            }}
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            py: 1.5,
            fontWeight: 700,
            fontSize: "1rem",
          }}
        >
          Sign In
        </Button>
      </Box>
      <Divider sx={{ my: 1 }} />
      <Typography sx={{ textAlign: "center", fontSize: "0.95rem" }}>
        Don&apos;t have an account?{" "}
        <Link
          to="/signup"
          style={{
            color: "#1976d2",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Sign Up
        </Link>
      </Typography>
      </Stack>
    </ThemeProvider>
  );
}

