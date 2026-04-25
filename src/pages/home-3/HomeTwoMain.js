import React from 'react';
import Banner from "./Banner"
import Feature from "./Feature"
import About from "./About"
import Services from "./Services"
import Clients from "./Clients"
import Chooseus from "./Chooseus"
import Video from "./Video"
import Funfacts from './Funfacts';
import Case from './Case';
import Testimonial from "./Testimonial"
import Team from "./Team"
import Cta from "./Cta"
import Choose from './ChooseSection';




const HomeThreeMain = () => {
	return (
		<React.Fragment>
			<Banner />
			<About />
			<Feature />
			<Services />
			<Chooseus />
			<Video />
			<Funfacts/>
			<Case/>
			<Choose/>
			<Team />
			<Clients />
			<Testimonial />
			<Cta />
		</React.Fragment>
	);
}

export default HomeThreeMain;