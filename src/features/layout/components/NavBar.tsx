import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../../../auth/AuthProvider";

export default function NavBar() {
  const { logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <h1>Riverfront Disc Golf League</h1>
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={RouterLink} to="/" sx={{ fontSize: "1.5rem" }}>
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/events"
            sx={{ fontSize: "1.5rem" }}
          >
            Events
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/groups"
            sx={{ fontSize: "1.5rem" }}
          >
            Groups
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/events/new"
            sx={{ fontSize: "1.5rem" }}
          >
            Create Event
          </Button>
          <Button color="inherit" sx={{ fontSize: "1.5rem" }} onClick={logout}>
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
