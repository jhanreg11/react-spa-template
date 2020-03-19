import React from 'react'
import './mouse-img.css'

export default class MousePosImg extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			currImg: this.props.default,
			currX: -1,
			currY: -1,
		}

		this.mouseHovering = false
		this.containerRef = React.createRef()
		this.timerId = false

		this._handleMouseLeave = this._handleMouseLeave.bind(this)
		this._handleMouseEnter = this._handleMouseEnter.bind(this)
		this._handleMouseMove = this._handleMouseMove.bind(this)
		this._setPhoto = this._setPhoto.bind(this)
	}

	_handleMouseMove(e) {
		if (e.pageX == null && e.clientX != null) {
			let eDoc = (e.target && e.target.ownerDocument) || document
			let doc = eDoc.documentElement
			let body = eDoc.body

			e.pageX = e.clientX +
				(doc && doc.scrollLeft || body && body.scrollLeft || 0) -
				(doc && doc.clientLeft || body && body.clientLeft || 0)
			e.pageY = e.clientY +
				(doc && doc.scrollTop  || body && body.scrollTop  || 0) -
				(doc && doc.clientTop  || body && body.clientTop  || 0 )
		}

		this.setState({
			currX: e.pageX,
			currY: e.pageY
		})
	}

	/**
	 * select the photo to be displayed based on mouse's x and y position
	 */
	_setPhoto() {
		if (this.mouseHovering)
			return

		let imgIdx = 0
		let posInfo = this.containerRef.current.getBoundingClientRect()

		if (this.state.currX <= posInfo.left && this.state.currY <= posInfo.top)
			imgIdx = 7
		else if (this.state.currX >= posInfo.right && this.state.currY <= posInfo.top)
			imgIdx = 1
		else if (this.state.currX >= posInfo.right && this.state.currY >= posInfo.bottom)
			imgIdx = 3
		else if (this.state.currX <= posInfo.left && this.state.currY >= posInfo.bottom)
			imgIdx = 5
		else if (this.state.currX >= posInfo.left && this.state.currX <= posInfo.right) {
			if (this.state.currY <= posInfo.top)
				imgIdx = 0
			else
				imgIdx = 4
		}
		else {
			if (this.state.currX <= posInfo.x)
				imgIdx = 6
			else
				imgIdx = 2

		}

		// let midX = window.innerWidth / 2
		// let midY = window.innerHeight / 2
		// let imgIdx = 0
		//
		// let currX = this.state.currX - midX
		// let currY = this.state.currY - midY
		//
		// if (currX >= 0 && currY <= 0)
		// 	imgIdx =  this._pickQuadrant(currX - midX / 2, currY - midY / 2)
		// else if (currX >= 0 && currY >= 0)
		// 	imgIdx = 2 + this._pickQuadrant(currX - midX / 2, currY + midY / 2)
		// else if (currX <= 0 && currY >= 0)
		// 	imgIdx = 4 + this._pickQuadrant(currX + midX / 2, currY - midY / 2)
		// else
		// 	imgIdx = (6 + this._pickQuadrant(currX + midX / 2, currY + midY / 2)) % 8

		this.setState({
			currImg: this.props.imgs[imgIdx]
		})
	}

	/**
	 * find quadrant of current x/y and return values based on which quad (see below).
	 * 	0 | 1
	 * 	-----
	 * 	1 | 2
	 */
	_pickQuadrant(x, y) {
		if ((x >= 0 && y >= 0) || (x <= 0 && y <= 0))
			return 1
		else if (x <= 0 && y >= 0)
			return 0
		else
			return 2
	}


	componentDidMount() {
		document.body.addEventListener('mousemove', this._handleMouseMove)
		this.timerId = setInterval(this._setPhoto, 10)
	}

	_handleMouseEnter() {
		clearInterval(this.timerId)

		this.setState({
			currImg: this.props.imgs[8]
		})

		this.mouseHovering = true
	}

	_handleMouseLeave() {
		this.timerId = setInterval(this._setPhoto, 100)
		this.setState({
			currImg: this.props.default
		})

		this.mouseHovering = false
	}

	render() {
		const containerType = this.props.rounded ? 'round' : 'square'

		return (
			<div id={this.props.id} ref={this.containerRef} onMouseEnter={this._handleMouseEnter} onMouseLeave={this._handleMouseLeave} className={containerType + ' mouse-img'}><div className="mouse-img-overlay"></div><img src={this.state.currImg}/></div>
		)
	}
}