import React from 'react'
import Section from '../../components/section/section'
import AboutImg from '../../img/about.jpg'
import './about-page.css'

const AboutPage = (props) => (
	<Section title="About" id="about">
			<div className="body-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut molestie, justo in viverra molestie, nibh velit ullamcorper risus, eget varius elit lectus quis ex. Duis quis neque mollis, interdum dolor a, dictum ex. Duis at eros ac ipsum congue cursus a quis enim. Suspendisse non nibh vel enim blandit maximus eu sit amet tortor. Vestibulum dictum blandit pretium. Aliquam erat volutpat. Curabitur ullamcorper orci eu nunc efficitur, non congue libero varius. Nullam ullamcorper tempus quam, hendrerit congue nisl rhoncus in. Nullam a pretium dolor, sit amet consectetur enim.</div>
			<div id="about-img"><img src={AboutImg}/></div>
	</Section>
)

export default AboutPage
