import React from 'react'
import PropTypes from 'prop-types'

class NavLink extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			className: this.props.className
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.setActive)
	}

	componentWillUnmount() {
		this.setState({
			className: this.props.className
		})

		window.removeEventListener('scroll', this.setActive)
	}

	setActive() {
		let oldClass = this.state.className
		this.setState({
			className: oldClass + ' active'
		})
	}

	render() {
		return (
			<div className={this.state.className}>
				<a href={this.props.to}>{this.props.name}</a>
			</div>
		)
	}
}

export default NavLink