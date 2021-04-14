import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="sth"></div>
                <div className="developed-by">
                    <hr/>
                    <div className="row">
                        <p className="dev-name">Developed by Pato Sala</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/patricio-sala-1025a1190/?locale=en_US" className="dev-social-icon linkedin">
                            <i class="fab fa-linkedin-in fa-2x"></i>
                            </a>
                            <a href="https://github.com/PatoSala" className="dev-social-icon github">
                            <i class="fab fa-github fa-2x"></i>
                            </a>
                            <a href="https://www.instagram.com/pato.sala/" className="dev-social-icon ig">
                            <i class="fab fa-instagram fa-2x"></i>
                            </a>
                            <a href="mailto: patosala998@gmail.com?subject= Get In Touch" className="dev-social-icon email">
                            <i class="fas fa-at fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sth"></div>
            </div>
        </footer>
    );
}

export default Footer;