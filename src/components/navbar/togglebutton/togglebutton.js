import React from 'react'
import './togglebutton.css'

const ToggleButton = props => (
	<div id="toggle-button" onClick={props.click}>
		<div className="toggle-line"/>
		<div className="toggle-line"/>
		<div className="toggle-line"/>
	</div>
)

export default ToggleButton