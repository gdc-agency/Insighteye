import React from 'react';
import HomeMain from './HomeMain';
import Footer from '../../components/Layout/Footer';
import Header from '../../components/Layout/Header';


const Home = () => {
	return (
		<React.Fragment>
			
			<Header />
			<HomeMain />

			<Footer footerClass="main-footer" />
		</React.Fragment>
	);
}

export default Home;
