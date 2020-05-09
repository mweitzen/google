import React from 'react'
import { useRouteMatch } from 'react-router-dom'


// nodejs library that concatenates classes
import clsx from 'clsx';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/material-kit-react/views/landingPage.js";

import Parallax from "../components/public/Parallax.js";

import GridContainer from "../components/public/Grid/GridContainer.js";
import GridItem from "../components/public/Grid/GridItem.js";

import PublicLayout from '../components/public/PublicLayout'

import {
  Link
} from 'react-router-dom'

const useStyles = makeStyles(styles);

const About = ({switch: NestedSwitch}) => {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <PublicLayout>
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
          <p>
            <Link to={`${url}/jack`}><button>Jack</button></Link>
          </p>
          <p>
            <Link to={`${url}/jill`}><button>Jill</button></Link>    
          </p>
          <br />
          <p>Bitchin </p>
          <br />
          <p>More Content</p>
        </div>
      </div>
      {
        NestedSwitch
      }
    </PublicLayout>
  )
}

export default About
