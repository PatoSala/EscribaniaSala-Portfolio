import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './Specialties.css';

function Specialties() {
    useEffect(()=> {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
            <section className="specialties" data-aos="fade-up">
                <h2>Especialidades</h2>
                <hr/>
                <ul data-aos="fade-up">
                    <li>Contratos Civiles</li>
                    <li>Contratos Comerciales</li>
                    <li>Certificación de Firmas</li>
                    <li>Certificación de Reproducciones</li>
                    <li>Asesoramiento y redacción de Documentos</li>
                    <li>Habilitaciones Comerciales</li>
                    <li>Actas de Comprobación</li>
                    <li>Asesoramiento integral en la compra de campos</li>
                    <li>Poderes y cuantos instrumentos sean conducentes a lograr el desarrollo normal y dentro de la mayor seguridad jurídica de las actividades de los requirentes. </li>
                </ul>
            </section>
        </>
    );
}

export default Specialties;