import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './ContactInfo.css';

function ContactInfo() {
    useEffect(()=> {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
            <section className="contact-info" data-aos="fade-up">
                <h2>Contacto</h2>
                <hr/>
                <div className="contact"></div>
            </section>
        </>
    );
}

export default ContactInfo;