import React from 'react'
import './typed.css'

export default class Typed extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			showingText: '',
			caret: '▋'
		}

		this.typeInterval = null
		this.caretInterval = null

		this.updateText = this.updateText.bind(this)
		this.flashCaret = this.flashCaret.bind(this)
	}

	updateText() {
		let nextChar = this.props.text[this.state.showingText.length]

		if (typeof nextChar != 'undefined') {
			let newText = this.state.showingText + nextChar
			this.setState({
				showingText: newText
			})
		}
		else
			clearInterval(this.intervalId)
	}

	flashCaret() {
		let oldState = this.state.caret
		if (oldState == ' ')
			this.setState({caret: '▋'})
		else
			this.setState({caret: ' '})
	}

	componentDidMount() {
		this.typeInterval = setInterval(this.updateText, this.props.typeSpeed)
		this.caretInterval = setInterval(this.flashCaret, this.props.caretSpeed)
	}

	render() {
		return (
			<div id={this.props.id} className="typed">
				<div className='text' style={this.props.textStyle}>{this.state.showingText}</div><div className='caret'>{this.state.caret}</div>
			</div>
		)
	}
}