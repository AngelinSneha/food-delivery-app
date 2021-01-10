import React from 'react'
import "./HomePage.css"
import Footer from "./footer/Footer"
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import HomePageStart from "./homePage/HomePageStart";
import IconButton from '@material-ui/core/IconButton';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Button from '@material-ui/core/Button';
import CollectionCards from "./homePage/CollectionCards";

const useStyles = makeStyles((theme) => ({
    icon: {
        paddingLeft:0
    },
}));
function HomePage() {
    const classes = useStyles();
    return (
        <div>
            <HomePageStart />

            {/* Collection Cards */}
            {/* <div className="collections">
                <p className="todays_offer">Today's Offers</p>
                <div className="restaurants_button">
                <Button size="small" color="secondary" href='/'>
                    Checkout our Menu
                </Button>
                <IconButton className={classes.icon} href='/'  color="secondary" aria-label="Arrow Right">
                <ArrowRightIcon />
                </IconButton>
                </div>
                <p className="top_restaurants">Discover the best food near you.</p>
                
            </div>
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={10} >
                <CollectionCards />
                </Grid>
                <Grid item xs={1} />
            </Grid> */}

            {/* footer */}
            <Footer />
        </div>
    )
}

export default HomePage
