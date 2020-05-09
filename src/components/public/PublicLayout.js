import React from 'react'
import PropTypes from 'prop-types'

import PublicNavbar from "./PublicNavbar.js";
import PublicFooter from "./PublicFooter.js";

import {LeftLinks} from "./PublicLinks.js";
import {RightLinks} from "./PublicLinks.js";

const PublicLayout = (props) => {
  const { footerWhiteFont: whiteFont } = props
  return (
    <div>
      <PublicNavbar
        brand="Mikey Bitch"
        leftLinks={<LeftLinks />}
        rightLinks={<RightLinks />}
        color="transparent"
        fixed
        changeColorOnScroll={{
          /* Navbar Change on Scroll */
          height: 225,
          color: "white"
        }}
        {...props}
      />
      { props.children }
      <PublicFooter whiteFont={whiteFont || false} />
    </div>
  )
}

PublicLayout.propTypes = {
  footerWhiteFont: PropTypes.bool
}

export default PublicLayout
