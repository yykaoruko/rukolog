import React from "react"
import Styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className={Styles.footer}>
    <div className={Styles.footer__sns}>
      <a
        className={Styles.footer__sns__link}
        href="https://twitter.com/yykaoruko"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        className={Styles.footer__sns__link}
        href="http://github.com/yykaoruko"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
    <small className={Styles.footer__copyright}>&copy; Rukolog 2020</small>
  </footer>
)

export default Footer
