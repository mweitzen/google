import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { useFirebase } from 'react-redux-firebase'

// styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "../assets/jss/material-kit-react/views/loginPage.js";
import image from "../assets/img/landing-bg.jpg";

// core components
import PublicLayout from "../components/public/PublicLayout.js";
import GridContainer from "../components/public/Grid/GridContainer.js";
import GridItem from "../components/public/Grid/GridItem.js";
import Button from "../components/public/Button.js";
import Card from "../components/public/Card/Card.js";
import CardBody from "../components/public/Card/CardBody.js";
import CardFooter from "../components/public/Card/CardFooter.js";

import GoogleButton from 'react-google-button'

const useStyles = makeStyles(styles);

const Login = () => {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/app" } };

  const firebase = useFirebase();

  const classes = useStyles();

  const creds = {
    provider: 'google',
    type: 'popup',
    scopes: ['https://mail.google.com']
  }

  const handleLogin = () => (
    firebase.login(creds)
      .then(() => {
        history.replace(from)
      })
    )

  return (
    <PublicLayout footerWhiteFont >
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                  <h1 className={classes.divider}>Get Cleaned Up</h1>
                  <h3 className={classes.divider}>Sign In To Get Started</h3>
                  <br />
                  <CardBody>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center'
                      }}
                      >
                      <GoogleButton
                        label="Connect with Gmail"
                        type="light"
                        onClick={handleLogin}
                        />
                    </div>
                    <br />
                    {
                      ( from.pathname !== "/" && from.pathname !== "/app") && <p>You must log in to view the page at <strong>{from.pathname}</strong></p>
                    }
                    <p><small>Make a privacy and terms page so users feel safe</small></p>
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg">
                      Learn More
                    </Button>
                  </CardFooter>

              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </PublicLayout>
  );
}

export default Login
