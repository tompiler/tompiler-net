import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HeadingBlocks from "../components/HeadingBlocks"
import Toolbar from "../components/Toolbar/Toolbar"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import Backdrop from "../components/Backdrop/Backdrop"

import "../styles/index.scss"

class IndexPage extends React.Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }
  render() {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="app">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main>
          <HeadingBlocks />
        </main>
      </div>
    )
  }
}

export default IndexPage
