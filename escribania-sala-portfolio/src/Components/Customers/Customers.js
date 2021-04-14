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
            <section className="customers" data-aos="fade-up">
                <h2>Clientes</h2><hr/>
            </section>
        </>
    );
}

export default Customers;