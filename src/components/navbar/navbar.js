import React from 'react'
import ToggleButton from './togglebutton/togglebutton.js'
import Sidebar from "./sidebar/sidebar"
import Backdrop from "./backdrop/backdrop"

import './navbar.css'

class Navbar extends React.Component {
	state = {
		sideBarOpen: false
	}

  sideClickHandler = () => {
    this.setState(prevState => {
      return { sideBarOpen: !prevState.sideBarOpen }
    })
  }

	render() {
		let backdrop
		if (this.state.sideBarOpen) {
			backdrop = <Backdrop click={this.sideClickHandler}/>
		}

		return (
			<div id="nav">
				<div id="navbrand"><a href="#landing">{this.props.navbrand}</a></div>
				<div id="spacer"></div>
				<div id="nav-items">

					{this.props.items.map((item) => (<div className="nav-item" key={item.to}>
							<a href={item.to}>{item.name}</a>
						</div>))}

				</div>
				{backdrop}
				<Sidebar show={this.state.sideBarOpen} items={this.props.items} close={this.sideClickHandler}/>
				<div id="hamburger">
					<ToggleButton click={this.sideClickHandler}/>
				</div>
			</div>
		)
	}
}

export default Navbar