import * as C from "./styles";
import Modal from '../../components/Modal';
import Footer from '../../components/Footer';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { useState } from 'react';
import Divlogado from '../../components/Divlogado';
import Divdeslogado from '../../components/Divdeslogado';
import useAuth from "../../hooks/useAuth";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Sidebar';
import { FaBars } from 'react-icons/fa'


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


const Funcionamento = () => {
    
  const [modal, setModal] = useState(false); 
  const { signed } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Preencha todos os campos!',
            showConfirmButton: false,
            timer: 2000
        })
        return;
    };

    const templateParams = {
        from_name: name,
        message: message,
        email: email
    };

    emailjs.send("service_5vgg8zf", "template_rfkcszh", templateParams, "7sYGLfBaEMjhGd4CK")
    .then((response) =>{
        console.log("E-mail enviado", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Sua mensagem foi enviada com sucesso',
            showConfirmButton: false,
            timer: 2500
        })
        setModal(!modal)

    }, (error) =>{
        console.log("Erro: ", error)
    });

  };

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
                        <li><Link to="/sobre">sobre</Link></li>
                        <li><Link to="/funcionamento"><span>funcionamento</span></Link></li>
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
                            <h2>receba<br></br>
                            transferências<br></br>
                            internacionais pela<br></br>
                            Employ
                            </h2>
                        </motion.div>
                        <motion.div variants={fadeInRight}>
                            <p>Quer saber como receber dinheiro do exterior por meio
                            de uma <span>transferência internacional?</span> Vamos te explicar
                            como a Employ funciona, quais são os prazos aplicados e
                            como conseguir a melhor taxa do mercado para receber em
                            dólar ou outra moeda.</p>
                            <p><span>Com a Employ, o pagamento é rápido e sem burocracia.<br></br></span>
                            Descubra como receber transferências internacionais de empresas do exterior.
                            </p>
                        </motion.div>
                    </C.HeaderTitle>
                    <C.HeaderText variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
                        <motion.div variants={itemLeft}>
                            <h2>como começo a receber<br></br>
                            pela Employ?
                            </h2>
                            <p>O primeiro passo para receber pagamento do exterior é
                            criar uma conta na Employ. Dá pra fazer isso em poucos minutos
                            no site. 
                            </p>
                        </motion.div>
                        <motion.div variants={itemRight}>
                            <img src="/images/porco.png" alt="Cofre" />
                        </motion.div>
                    </C.HeaderText>
                    <C.HeaderText2 variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
                        <motion.div variants={itemLeft}>
                            <img src="/images/dollar.png" alt="Dollar" />
                        </motion.div>
                        <motion.div variants={itemRight}>
                            <h2>como receber em dólar<br></br>
                            pela Employ?
                            </h2>
                            <p>Para receber transferências internacionais em dólar, basta ter sua
                            conta criada na Employ e <span>informar os dados bancários para o seu
                            pagamento no exterior.</span> No painel da sua conta, você tem acesso
                            a todas as informações necessárias, como IBAN, código SWIFT, nome do banco,
                            entre outros.</p>
                        </motion.div>
                    </C.HeaderText2>
                    <C.HeaderText3 variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
                        <motion.div variants={itemLeft}>
                            <h2>quanto tempo demora<br></br>
                            para o pagamento<br></br>
                            internacional chegar?
                            </h2>
                            <p>Depois que a empresa estrangeira fez SWIFT para o Brasil, <span>
                            o prazo para receber o pagamento do exterior geralmente é de 1 ou 
                            2 dias úteis,</span> mas pode chegar a até 5 dias úteis caso seja feriado
                            no país de origem, por exemplo.</p>
                        </motion.div>
                        <motion.div variants={itemRight}>
                            <img src="/images/relogio.png" alt="Relogio" />
                        </motion.div>
                    </C.HeaderText3>
                    <C.HeaderText4 variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
                        <motion.div variants={itemLeft}>
                            <img src="/images/carteira.png" alt="Carteira" />
                        </motion.div>
                        <motion.div variants={itemRight}>
                            <h2>como saber se o dinheiro<br></br>
                            já chegou?
                            </h2>
                            <p>Assim que o seu pagamento chega na Employ, <span>
                            você recebe um e-mail automático</span> avisando que a
                            transferência já está disponível.</p>
                        </motion.div>
                    </C.HeaderText4>
                </div>
            </C.Header>
            <C.Choice variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
                <motion.div variants={item}>
                    <h3>ainda tem dúvidas?</h3>
                    <button type="button" onClick={() => setModal(!modal)}>fale com a gente</button>
                </motion.div>
            </C.Choice>
            <Footer />
            <Modal estado={modal} changeEstado={setModal}>
                <C.Conteudo>
                    <h3>entre em contato com o nosso suporte</h3>
                    <label>
                        <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <textarea placeholder="Digite sua dúvida..." value={message} onChange={(e) => setMessage(e.target.value)} />

                    <button type="submit" onClick={sendEmail}>enviar</button>
                </C.Conteudo>
            </Modal>
            {sidebar && <Sidebar active={setSidebar}/>}
        </C.Container>
    )
};

export default Funcionamento;