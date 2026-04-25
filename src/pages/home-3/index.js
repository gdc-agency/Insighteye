import React from 'react';
import HeaderStyleTwo from '../../components/Layout/Header/HeaderStyleThree';
import Footer from '../../components/Layout/Footer';
import HomeThreeMain from './HomeTwoMain';

const HomeTwo = () => {
    return (
        <React.Fragment>
            <HeaderStyleTwo
                parentMenu='home'
                activeMenu="/home-3"
            />
            <HomeThreeMain/>
            <Footer/>
        </React.Fragment>
    );
}


export default HomeTwo;