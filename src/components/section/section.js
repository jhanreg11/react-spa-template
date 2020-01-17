import React from 'react'
import './section.css'

class Section extends React.Component {
	render() {
		return (
			<div className="section" id={this.props.id}>
					<h1 className="section-title going-to-animate" id={this.props.id + '-title'} onClick={this.handleMouseEnter} onMouseEnter={this.handleMouseEnter}>{this.props.title}</h1>
				<div className="section-body going-to-animate" id={this.props.id + '-body'}>
					{this.props.children}
				</div>
		</div>
		)
	}

}

export default Section