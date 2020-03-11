import PropTypes from "prop-types"
import React, { useState } from "react"
import Styles from "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"

const TableOfContents = ({ contents }) => {
  const [isOpen, toggle] = useState(false)
  return (
    <nav className={Styles.table}>
      <h1 className={Styles.table__heading}>
        もくじ
        <button
          className={Styles.table__heading__button}
          onClick={() => toggle(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
        </button>
      </h1>
      <div
        className={
          isOpen ? Styles.table__content__open : Styles.table__content__close
        }
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
