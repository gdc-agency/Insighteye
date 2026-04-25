import React from 'react';
import About from "./About"
import Banner from "./Banner"
import Services from "./Services"
import Case from "./Case"
import Team from "./Team"
import Contact from "./Contact"
import Feature from "./Feature"
import Chooseus from "./Chooseus"
// import Cta from "./Cta"
import Cta from './Cta';
import News from "./News"
import Faq from "./Faq"



const HomeTwoMain = () => {
	return (
		<React.Fragment>
			<Banner />
			<Feature />
			<About />
			<Services />
			<Chooseus />
			<Case />
			<Cta />
			<Team />
			<Faq />
			<News />
			<Contact />
		</React.Fragment>
	);
}

export default HomeTwoMain;