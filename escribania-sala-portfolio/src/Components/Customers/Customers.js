import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './Customers.css';

function Customers() {
    useEffect(()=> {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
            <section className="customers">
                <h2 data-aos="fade-up">Clientes</h2>
                <hr data-aos="fade-up"/>
                <p data-aos="fade-up">Algunas de las empresas que confían todos los días en nuestro servicio profesional:</p>
                <div className="some-customers" data-aos="fade-up">
                    <div className="some-customer-logo"></div>
                    <div className="some-customer-logo"></div>
                    <div className="some-customer-logo"></div>
                    <div className="some-customer-logo"></div>
                    <div className="some-customer-logo"></div>
                    <div className="some-customer-logo"></div>
                    <div className="some-customer-logo"></div>
                    <div className="some-customer-logo"></div>
                </div>
            </section>
        </>
    );
}

export default Customers;