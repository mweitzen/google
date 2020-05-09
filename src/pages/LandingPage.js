import React from "react";

// nodejs library that concatenates classes
import clsx from 'clsx';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/material-kit-react/views/landingPage.js";

import Parallax from "../components/public/Parallax.js";

import GridContainer from "../components/public/Grid/GridContainer.js";
import GridItem from "../components/public/Grid/GridItem.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

import PublicLayout from '../components/public/PublicLayout'

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();

  return (
    <PublicLayout>

      {/*

        <Parallax filter image={require("../assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Take Control of Your Inbox.</h1>
                <h4>
                  Clear the clutter and finally manage those pesky subscriptions with ease. Unsubscribe one-by-one, or remove in bulk. Then delete all the corresponding emails if you'd like!
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check It Out
                </Button>
              </GridItem>
            </GridContainer>
          </div>
      </Parallax>
      */ }
      {/*
        */ }
      <Parallax image={require("../assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Spring Cleaner</h1>
                <h3 className={classes.subtitle}>
                  Take control of your inbox. Remove the clutter with ease.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={clsx(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
    </PublicLayout>
  );
}
