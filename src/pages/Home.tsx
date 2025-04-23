import React from "react";
// import { ButtonUsage } from "../components/ButtonUsage";
import logo from "../logo.svg";
import { Grid } from "@mui/material";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from "@mui/material/Typography";

import "../App.css";

const Home = () => {
    return (
        <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" style={{'filter':'invert(100%)'}} />
            <p> wah wah wee wooo </p>
            <ButtonUsage></ButtonUsage> */}
            <Grid container rowSpacing={1} columnSpacing={30} justifyContent="center" alignItems="center" style={{ width: '90%' }} >
                <Grid size="grow" style={{ margin: '0px', padding: '0px', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={logo} className="App-logo" alt="logo" style={{ 'filter': 'invert(100%)', boxSizing: 'content-box', height: '20em' }} />
                </Grid>
                <Grid size={8} >
                    <Card className= '.MuiTabScrollButton-vertical' variant='outlined' style={{ padding: '20px', margin: '10px', backgroundColor: '#f0f0f0', height: '40em', overflow:'scroll' }}>
                        <CardContent>
                            <h1> About League </h1>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}> Time: Mondays 4:45pm-5:30pm sign-ups, 5:30-6:00pm shotgun start.</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}> Format: Singles by division (Intermediate, Advanced, Open, Women's Ameteur, Women's Open).</Typography>
                            <h5> Cost and Breakdown: </h5>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}> Intermediate, Advanced, Open: $10 ($5 payouts, $1 Women's Division payouts, $1 Ace Pool, $2 raffle entry, $1 park improvement fund).</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}> Women's Amateur, Women's Open: $5 ($1 Ace Pool, $2 raffle entry, $1 park improvement fund, $1 Women's CTP prize).</Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}> Optional: $1 Closest-To-Pin competition (one hole each week), $2 Bonus Ace Hole.</Typography>
                            <h5>Sign-up</h5>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}> There will be an opportunity to pre-register using the Events page on this website. Pre-registration opens at 9:30am on league days and can fill quickly!
                                Pre-registering guarantees you a spot and makes league much easier to organize, so please pre-register or have someone pre-register for you!.</Typography>
                            <h5>Riverfront Bag Tag</h5>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}> Bag tags will be sold for $15 to the first 125 interested individuals. Purchase includes early registration access for The Forgotten Star Open (scheduled Labor Day).
                                Search for the presale document in the Riverfront Disc Golf Club Facebook Group for more information. </Typography>
                            <h5>Donations</h5> 
                            <Typography>Riverfront Disc Golf Club is always accepting and appreciative of donations for our weekly raffles. Please consider donating:</Typography>
                            <List marker="circle">
                                <ListItem> <Typography>New or field-tested (good condition) discs </Typography></ListItem>
                                <ListItem> Disc Golf Accessories and Apparel </ListItem>
                                <ListItem> Small items like pins, patches, stickers, disc dots, minis, etc</ListItem>
                                <ListItem> Outdoorsy stuff like flashlights, bug spray, multitools, sunscreen, yard games</ListItem>
                                <ListItem> LEDs and batteries for night golf</ListItem>
                                <ListItem> Adult beverages or homemade food items</ListItem>
                                <ListItem> Coupons, gift cards</ListItem>
                            </List>
                            <h5>Volunteers Needed</h5>
                            <Typography>I often get asked "how can I help?" If you're interested in any of the below responsibilities pleace reach out to me (Dan Ginter).</Typography>
                            <List marker="disc">
                                <ListItem>Course Cleanup Events</ListItem>
                                <ListItem>New fairway construction</ListItem>
                                <ListItem>Assistant TDs for potential Pride Week Tournament</ListItem>
                                <ListItem>Assistant TDs for Forgotten Star Open</ListItem>
                                <ListItem>Course layout volunteers</ListItem>
                                <ListItem>Course set-up volunteers (before league, Mondays)</ListItem>
                                <ListItem>League registration volunteers (before league, Mondays)</ListItem>
                            </List>
                            <h5>Sponsors</h5>
                            <Typography>Thank you to our sponsors Forgotten Star Brewing, Twin Town Events, Kaposia Pro Shop, and Minnesota Frisbee Association!</Typography>
                        
                            
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </header>
    );
}
export default Home;
