import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './AboutUs.css';

function AboutUs() {
    useEffect(()=> {
        Aos.init({ duration: 2500 });
    }, [])
    return (
        <>
            <section className="about-us" data-aos="fade-up">
                <h2>Quienes Somos</h2>
                <hr/>
                <p data-aos="fade-up">El apellido SALA en el ámbito notarial de la Ciudad Autónoma de Buenos Aires es reconocido por su basta trayectoria profesional.-

En al año 1933 el Escribano Antonio Carlos SALA comenzó a ejercer la función notarial en esta Ciudad.-

Tres de sus cuatro hijos siguieron sus pasos.- El tercero de ellos, Patricio Adolfo SALA, mi padre, ejerció toda su vida el notariado y me legó todos los principios rectores de nuestra profesión, los cuales se resumen en el principio “nihil prius fide”, nada antes que la fe.-

Luego de egresar del Colegio Los Molinos, en el año 1992 comencé a trabajar junto a mi padre en forma paralela y simultánea a mis estudios en Derecho con el firme objetivo de concluir la carrera universitaria para luego ejercer el notariado.-

En el año 1999 egresé de la Facultad de Derecho de la Universidad Nacional de Buenos Aires, obteniendo el título de abogado con orientación en Derecho Notarial con un excelente promedio en la especialización enunciada.-

Con el cambio en el año 2000, de la Ley Notarial 12.990 a la Ley 404 que regula nuestra función en la Ciudad de Buenos Aires, para acceder al ejercico del notariado, según prescribe el artículo 34 de la ley, se debe aprobar un examen escrito y oral de máxima exigencia que hace a la excelencia profesional de todos aquellos que accedimos a la función notarial mediante la nueva ley.-

Mi experiencia y trayectoria profesional como escribano estuvo siempre ralacionada y orientada a la atención y requerimientos de grandes empresas con el perfil y servicio que las mismas requieren, atención personalizada, celeridad en la resolución de temas de incumbencia notarial y honorarios competitivos, sin perder nunca nuestra principal función de brindar seguridad jurídica a todos los actos que autorizamos.-

Todo un equipo de trabajo conformado por profesionales y asistentes que hace mucho años trabajamos juntos, se encuentra preparado, capacitado y dispuesto a brindar un servicio notarial de excelencia.</p>
            </section>
        </>
    );
}

export default AboutUs;