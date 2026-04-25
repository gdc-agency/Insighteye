import React from 'react';
import Banner from "./Banner"
import About from './AboutSection';
import Feature from './FeatureSection';
import Service from './ServiceSection';
import Choose from './ChooseusSection';
import Cta from './CtaSection';
import Video from './videoSection';
import Clients from './Clients';
import Funfacts from './Funfacts';
import Team from './Team';
import Faq from './Faq';
import News from './News';
import TestimonialSlider1 from '../../components/slider/TestimonialSlider01';



const HomeMain = () => {
	return (
		<React.Fragment>
			<Banner />
			<Feature />
			<About />
			<Service/>
			<Clients />
			<Choose/>
			<Video/>
			<Funfacts/>
			<TestimonialSlider1/>
			<Team/>
			<Faq/>
			<News/>

			
			

			
			<Cta/>
			
		</React.Fragment>
	);
}

export default HomeMain;