import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Styles from "./index.module.scss"

const Header = ({ siteTitle }) => (
  <header className={Styles.header}>
    <h1 className={Styles.header__heading}>
      <Link className={Styles.className__heading__link} to="/">
        {siteTitle + '.'}
      </Link>
    </h1>
    <p className={Styles.header__text}>Frontend developer's blog</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
