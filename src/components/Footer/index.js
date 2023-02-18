import * as C from "./styles";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom';


let easeing = [0.6, -0.5, 0.01, 0.99];

const item = {
    hidden:{opacity:0, y:-30},
    show:{
        opacity: 1,
        y: 0,
        transition:{duration: 0.8, ease: easeing}
    }
};

const container = {
    show:{
        transition:{
            staggerChildren: 0.2
        }
    }
};

const Footer = () => {
    return(
        <C.Container variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
           <C.Footer>
                <C.Title variants={item}> 
                    <h2><span>.</span>Employ</h2>
                    <C.Social>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><AiOutlineFacebook /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a>
                        <a href="https://www.linkedin.com/in/williambierhals/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a>
                    </C.Social>
                </C.Title>
                <C.Info variants={item}>
                    <h3>Informações</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/funcionamento">Funcionamento</Link></li>
                    </ul>
                </C.Info>
           </C.Footer>
        </C.Container>
    );
};

export default Footer;