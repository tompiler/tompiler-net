import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Main from "../components/Main/Main"
import Toolbar from "../components/Toolbar/Toolbar"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import Backdrop from "../components/Backdrop/Backdrop"

import "../styles/index.scss"

class IndexPage extends React.Component {
  state = {
    sideDrawerOpen: false,
    route: "about",
  }

  routeHandler = route => {
    console.log(route)
    this.setState(() => {
      return { route: route }
    })
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
        <Main route={this.state.route} routeHandler={this.routeHandler} />
      </div>
    )
  }
}

export default IndexPage
