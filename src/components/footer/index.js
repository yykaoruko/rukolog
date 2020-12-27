import React from "react"
import Styles from "./index.module.scss"

const Footer = () => (
  <footer className={Styles.footer}>
    <div className={Styles.footer__wrap}>
      <small className={Styles.footer__copyright}>&copy; Rukolog 2020</small>
    </div>
  </footer>
)

export default Footer
