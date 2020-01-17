import React from 'react'
import './sidebar.css'

const Sidebar = props => {
	let classes = 'side-bar'
	if (props.show)
		classes = 'side-bar open'
	return (
		<div className={classes}>
			<div id='side-items'>

				{props.items.map((item) => (<div className="side-item" key={item.name}>
				<a href={item.to} onClick={props.close}>{item.name}</a>
			</div>	))}

			</div>
		</div>
	)
}

export default Sidebar