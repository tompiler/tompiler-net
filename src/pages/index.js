import React from "react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default IndexPage
