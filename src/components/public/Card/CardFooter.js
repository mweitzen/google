import React from "react";
// nodejs library that concatenates classes
import clsx from 'clsx';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../../assets/jss/material-kit-react/components/cardFooterStyle.js";

const useStyles = makeStyles(styles);

export default function CardFooter(props) {
  const classes = useStyles();
  const { className, children, ...rest } = props;
  const cardFooterClasses = clsx({
    [classes.cardFooter]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
