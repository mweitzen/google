/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";

import { NavLink } from 'react-router-dom'

import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/components/footerStyle.js";

// material-ui core components
import { List, ListItem } from "@material-ui/core";

const useStyles = makeStyles(styles);

const Footer = (props) => {
  const classes = useStyles();
  const { whiteFont } = props;

  const footerClasses = clsx({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = clsx({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <NavLink
                to="#"
                className={classes.block}
              >
                Mikey Bitch
              </NavLink>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <NavLink
                to="#"
                className={classes.block}
              >
                About us
              </NavLink>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <NavLink
                to="#"
                className={classes.block}
              >
                Blog
              </NavLink>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <NavLink
                to="#"
                className={classes.block}
              >
                Licenses
              </NavLink>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy;
          {new Date().getFullYear()}{' '}
          Made by{' '}
          <ListItem className={classes.inlineBlock}>
            <NavLink
              to="#"
              >
              Mikey Bitch
            </NavLink>
          </ListItem>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};

export default Footer
