import React from "react"
import Layout from "../components/layout"

import CellSelector from "../components/CellSelector/CellSelector"

const articles = props => {
  const pathName =
    props.location.pathname.substr(1) === ""
      ? "tompiler"
      : props.location.pathname.substr(1)
  return <Layout {...props} left={<CellSelector route={pathName} />} />
}

export default articles
