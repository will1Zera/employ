import * as C from "./styles";
import Footer from '../../components/Footer';
import Divlogado from '../../components/Divlogado';
import Divdeslogado from '../../components/Divdeslogado';
import useAuth from "../../hooks/useAuth";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Sidebar';
import { FaBars } from 'react-icons/fa'
import { useState } from 'react';

let easeing = [0.6, -0.5, 0.01, 0.99];

const fadeInLeft = {
    initial:{
        x: -200,
        opacity: 0,
        transition:{
            duration: 0.8,
            ease: easeing
        }
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 0.8,
            delay: 0.2,
            ease: easeing
        }
    }
};

const fadeInRight = {
    initial:{
        x: 200,
        opacity: 0,
        transition:{
            duration: 0.8,
            ease: easeing
        }
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 0.8,
            delay: 0.6,
            ease: easeing
        }
    }
};

const header = {
    initial:{
        y: -60,
        opacity: 0,
        transition:{duration: 0.05, ease: easeing}
    },
    animate:{
        y: 0,
        opacity: 1,
        transition:{duration: 0.5, ease: easeing}
    }
};

const item = {
    hidden:{opacity:0, y:-30},
    show:{
        opacity: 1,
        y: 0,
        transition:{duration: 0.8, ease: easeing}
    }
};

const itemRight = {
    hidden:{opacity:0, x: 200},
    show:{
        opacity: 1,
        x: 0,
        transition:{duration: 0.8, ease: easeing}
    }
};

const itemLeft = {
    hidden:{opacity:0, x:-200},
    show:{
        opacity: 1,
        x: 0,
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

const Sobre = () => {

    const { signed } = useAuth();

    const [sidebar, setSidebar] = useState(false);
   
    const showSidebar = () => setSidebar(!sidebar);

    return(
            <C.Container initial='initial' animate='animate'>
                <C.Navbar>
                    <C.Title>
                        <motion.h1 variants={header}><span>.</span>Employ</motion.h1>
                    </C.Title>
                    <C.Links>
                        <motion.ul variants={header}>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/sobre"><span>sobre</span></Link></li>
                            <li><Link to="/funcionamento">funcionamento</Link></li>
                        </motion.ul>
                    </C.Links>
                    <C.User variants={header}>
                        {signed > 0 ? <Divlogado /> : <Divdeslogado />}
                    </C.User>
                    <C.Bars variants={header}>
                        <FaBars onClick={showSidebar}/>
                    </C.Bars>
                </C.Navbar>
                <C.Header>
                    <div>
                        <C.HeaderTitle>
                            <motion.div variants={fadeInLeft}>
                                <img src="/images/header1.jpg" alt="Garota" />
                            </motion.div>
                            <motion.div variants={fadeInRight}>
                                <h2>somos a <span>Employ.</span></h2>
                                <p>Dedicados em facilitar a relação das<br></br>
                                pessoas com suas finanças, através<br></br>
                                de tecnologia.    
                                </p>
                            </motion.div>
                        </C.HeaderTitle>
                        <C.HeaderText variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
                            <motion.div variants={itemLeft}>
                                <h2>somos pessoas como você.</h2>
                                <p>E foi enfrentando as mesmas dificuldades<br></br>
                                que você, que resolvemos criar um jeito<br></br>
                                mais simples de fazer transações.   
                                </p>
                            </motion.div>
                            <motion.div variants={itemRight}>
                                <img src="/images/header2.jpeg" alt="Garoto" />
                            </motion.div>
                        </C.HeaderText>
                    </div>
                </C.Header>
                <C.Info variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
                    <motion.div variants={item}>
                        <h3>R$ 3.000.000.000</h3>
                        <p>Esse é o valor que já movimentamos na nossa plataforma,<br></br>
                        e a cada dia esse número cresce.
                        </p>
                    </motion.div>
                </C.Info>
                <C.Choice variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
                    <motion.div variants={item}>
                        <h3>facilite sua vida,<br></br>
                        escolha a <span>#Employ </span>
                        </h3>
                        <button type="button">começar agora</button>
                    </motion.div>
                </C.Choice>
                <Footer />
                {sidebar && <Sidebar active={setSidebar}/>}
            </C.Container> 
    )
};

export default Sobre;