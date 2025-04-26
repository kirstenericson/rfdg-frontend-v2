import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import {useAuth} from "../auth/AuthProvider";
export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <h1>Riverfront Disc Golf League</h1>
                </Typography>
                <Stack direction="row" spacing={2} >
                    <Button color='inherit' href="/" sx={{ fontSize: '1.5rem' }}>
                        Home
                    </Button>
                    <Button color="inherit" href="/events" sx={{ fontSize: '1.5rem' }}>
                        Events
                    </Button>
                    <Button color="inherit" href="/groups" sx={{ fontSize: '1.5rem' }}>
                        Groups
                    </Button>
                    <Button color="inherit" href="/logout" sx={{ fontSize: '1.5rem' }} onClick={useAuth().logout}>
                        Logout
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}