import React from "react";
import logo from "../logo.svg";
import { Grid } from "@mui/material";
import LeagueInfoCard from "../features/home/components/LeagueInfoCard";

import "../App.css";

const Home = () => {
    return (
        <header className="App-header">
            <Grid container rowSpacing={1} columnSpacing={30} justifyContent="center" alignItems="center" style={{ width: '90%' }} >
                <Grid size="grow" style={{ margin: '0px', padding: '0px', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={logo} className="App-logo" alt="logo" style={{ 'filter': 'invert(100%)', boxSizing: 'content-box', height: '20em' }} />
                </Grid>
                <Grid size={8} >
                    <LeagueInfoCard />
                </Grid>
            </Grid>
        </header>
    );
}
export default Home;
