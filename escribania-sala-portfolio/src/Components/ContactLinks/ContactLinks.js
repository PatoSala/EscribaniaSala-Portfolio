import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './ContactLinks.css';

function ContactLinks() {
    useEffect(()=> {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
            <div className="bubble-wrapper" data-aos="fade-in">
                <a className="contact-bubble" href="">
                <img align="left" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/linkedin.svg" />
                </a>
                <a className="contact-bubble" href="">
                <img align="left" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/gmail.svg" />
                </a>
                <a className="contact-bubble" href="">
                <img align="left" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/telegram.svg" />
                </a>
                <a className="contact-bubble" href="">
                <img align="left" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/whatsapp.svg" />
                </a>
            </div>
        </>
    );
}

export default ContactLinks;