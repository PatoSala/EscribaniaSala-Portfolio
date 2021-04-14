import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './Nav.css';

function Nav() {
    useEffect(()=> {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <nav data-aos="fade-in">
            <div className="nav-links">   
                <a href="">Quienes Somos</a>
                <a href="">Especialidades</a>
                <a href="">Clientes</a>
                <a href="">Contacto</a>
            </div>
        </nav>
    );
}

export default Nav;