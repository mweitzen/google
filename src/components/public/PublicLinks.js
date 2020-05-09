/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "./CustomDropdown.js";
import Button from "./Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export const LeftLinks = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          component={NavLink}
          to="/about"
          color="transparent"
          className={classes.navLink}
        >
          About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          component={NavLink}
          to="/features"
          color="transparent"
          className={classes.navLink}
        >
          Features
        </Button>
      </ListItem>
    </List>
  );
}

export const RightLinks = (props) => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Documentation"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <NavLink to="/" className={classes.dropdownLink}>
              Getting Started
            </NavLink>,
            <NavLink to="/" className={classes.dropdownLink}>
              Privacy Policy
            </NavLink>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          component={NavLink}
          to="/app"
          color="transparent"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Dashboard
        </Button>
      </ListItem>
    </List>
  );
}
