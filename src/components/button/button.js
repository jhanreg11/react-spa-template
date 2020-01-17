import React from 'react'
import './button.css'

const Button = props => (
	<a id={props.id} href={props.to} target='_blank' className="btn">{props.children}</a>
)

export default Button