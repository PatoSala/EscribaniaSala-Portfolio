import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './Header.css';

function Header(props) {
    useEffect(()=> {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <section className="header" data-aos="fade-in">
            <h2 className="title">Escribanía Sala</h2>
            <h3 className="subtitle">Desde 1931</h3>
        </section>
    );
}

export default Header;