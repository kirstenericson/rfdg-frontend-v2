import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <h1>Riverfront Disc Golf League</h1>
                </Typography>
                <Stack direction="row" spacing={2} >
                    <Button color='inherit' href="/">
                        Home
                    </Button>
                    <Button color="inherit" href="/events">
                        Events
                    </Button>
                    <Button color="inherit" href="/groups">
                        Groups
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}