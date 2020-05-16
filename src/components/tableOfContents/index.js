import PropTypes from "prop-types"
import React, { useState } from "react"
import Styles from "./index.module.scss"

const TableOfContents = ({ contents }) => {
  return (
    <nav className={Styles.table}>
      <div
        className={Styles.table__content__open}
        dangerouslySetInnerHTML={{ __html: contents }}
      />
    </nav>
  )
}

TableOfContents.propTypes = {
  contents: PropTypes.string,
}

TableOfContents.defaultProps = {
  contents: ``,
}

export default TableOfContents
