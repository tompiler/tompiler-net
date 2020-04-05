import React from "react"
import Main from "../components/Main/Main"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import Backdrop from "../components/Backdrop/Backdrop"
import { Router, Location } from "@reach/router"

import "../styles/app.scss"

const App = props => {
  return (
    <Location>
      {({ location }) => (
        <Router location={location} className="router">
          {props.children}
        </Router>
      )}
    </Location>
  )
}

export default App

// class App extends React.Component {
//   state = {
//     sideDrawerOpen: false,
//     route: "tompiler",
//   }

//   routeHandler = route => {
//     // console.log(route)
//     this.setState(() => {
//       return { route: route }
//     })
//   }

//   drawerToggleClickHandler = () => {
//     this.setState(prevState => {
//       return { sideDrawerOpen: !prevState.sideDrawerOpen }
//     })
//   }

//   backdropClickHandler = () => {
//     this.setState({ sideDrawerOpen: false })
//   }
//   render() {
//     let backdrop

//     if (this.state.sideDrawerOpen) {
//       backdrop = <Backdrop click={this.backdropClickHandler} />
//     }

//     return (
//       <div className="app">
//         <Location>
//     {({ location }) => (
//         <Toolbar
//           drawerClickHandler={this.drawerToggleClickHandler}
//           routeHandler={this.routeHandler}
//         />
//         <SideDrawer show={this.state.sideDrawerOpen} />
//         {backdrop}
//         <Router>
//           <Tompiler path="/" exact />
//           <Mission path="aims" />
//           {/* <Main route={this.state.route} routeHandler={this.routeHandler} /> */}
//         </Router>
//       </div>
//     )
//   }
// }

// export default App
