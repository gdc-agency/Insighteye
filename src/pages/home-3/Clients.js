import React from 'react';
import ClientsSlider1 from '../../components/slider/ClientsSlider1';


const Clients = (props) => {
    return (
        
        <>
        {/*clients-section */}
        <section className="clients-section alternat-2">
            <div className="auto-container">
                <ClientsSlider1/>
            </div>
        </section>
        {/*clients-section end */}
        </>


    );
}

export default Clients;