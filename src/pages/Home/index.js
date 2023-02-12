import { useState } from 'react';
import * as C from "./styles";
import useAuth from "../../hooks/useAuth";
import { AiOutlineUser } from 'react-icons/ai';
import { BsQuestionLg } from 'react-icons/bs';
import Modal from '../../components/Modal';
import Footer from '../../components/Footer';
import Divlogado from '../../components/Divlogado';
import Divdeslogado from '../../components/Divdeslogado';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa'
import Sidebar from '../../components/Sidebar';

let easeing = [0.6, -0.5, 0.01, 0.99];

const fadeInUp = {
    initial:{
        y: -60,
        opacity: 0,
        transition:{
            duration: 0.6,
            ease: easeing
        }
    },
    animate:{
        y: 0,
        opacity: 1,
        transition:{
            duration: 0.6,
            delay: 0.5,
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

const container = {
    show:{
        transition:{
            staggerChildren: 0.2
        }
    }
};


const Home = () => {

  const [modal, setModal] = useState(false); 

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

  const [sentOutside, setSentOutside] = useState(() =>{
      return "Valor enviado do exterior"
  });
  const [coinBR, setCoinBR] = useState(() =>{
      return "BRL"
  });
  const [coinEUA, setCoinEUA] = useState(() =>{
      return "USD"
  });
  const [price, setPrice] = useState(() =>{
      return "R$5.40"
  });
  const [arriveAccount, setArriveAccount] = useState(() =>{
      return "Valor que chega na sua conta"
  });
  const [valueBR, setValueBR] = useState(() =>{
      return "5348.18"
  });
  const [valueEUA, setValueEUA] = useState(() =>{
      return "1000"
  });
  const [button, setButton] = useState(() =>{
      return "Receber agora"
  });
  const [buttonColor, setButtonColor] = useState(() =>{
      return "#a784ff"
  });
  const [table1, setTable1] = useState(() =>{
      return "#a784ff"
  });
  const [table2, setTable2] = useState(() =>{
      return "black"
  });

  function change(){
      setSentOutside(a => {
          return "Valor enviado da sua conta"
      });
      setCoinBR(a => {
          return "USD"
      });
      setCoinEUA(a => {
          return "BRL"
      });
      setPrice(a => {
          return "$0.19"
      });
      setArriveAccount(a => {
          return "Valor que chega no exterior"
      });
      setValueBR(a => {
          return "913.44"
      });
      setValueEUA(a => {
          return "5000"
      });
      setButton(a => {
          return "Enviar agora"
      });
      setButtonColor(a => {
          return "blue"
      });
      setTable1(a => {
          return "black"
      });
      setTable2(a => {
          return "blue"
      });
  };

  function standard(){
      setSentOutside(a => {
          return "Valor enviado do exterior"
      });
      setCoinBR(a => {
          return "BRL"
      });
      setCoinEUA(a => {
          return "USD"
      });
      setPrice(a => {
          return "R$5.40"
      });
      setArriveAccount(a => {
          return "Valor que chega na sua conta"
      });
      setValueBR(a => {
          return "5348.18"
      });
      setValueEUA(a => {
          return "1000"
      });
      setButton(a => {
          return "Receber agora"
      });
      setButtonColor(a => {
          return "#9270E5"
      });
      setTable1(a => {
          return "#a784ff"
      });
      setTable2(a => {
          return "black"
      });
  };

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
                    <li><Link to="/"><span>home</span></Link></li>
                    <li><Link to="/sobre">sobre</Link></li>
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
            <C.HeaderItems>
                <C.Text>
                    <motion.h5 initial={{opacity: 0, scale: 0}} 
                    animate={{opacity: 1, scale: 1}} 
                    transition={{duration: 0.2, ease: easeing}}>
                        <AiOutlineUser />  seu dinheiro é apenas seu</motion.h5>
                    <motion.h2 initial={{opacity: 0, scale: 0}} 
                    animate={{opacity: 1, scale: 1}} 
                    transition={{duration: 0.6, ease: easeing}}>
                        transferências internacionais<br></br>facilitadas para você</motion.h2>
                    <motion.h6 variants={fadeInUp}>Crie sua conta e baixe nosso app em apenas 5 minutos</motion.h6>
                    <motion.h4 initial={{opacity: 0, scale: 0}} 
                    animate={{opacity: 1, scale: 1}} 
                    transition={{duration: 0.6, ease: easeing}}>
                        sem burocracias</motion.h4>
                    <motion.p variants={fadeInUp}>você abre a conta, sem<br></br>
                    precisar comprovar renda ou<br></br>
                    endereço e tem tudo fácil e<br></br>
                    rápido dentro do app!</motion.p>
                </C.Text>
                <C.Table initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.3, ease: easeing}}>
                    <C.TableTitle><C.TableTitle1 color={table1}><h5 onClick={standard}>Quero receber</h5></C.TableTitle1><C.TableTitle2 color={table2}><h6 onClick={change}>Quero enviar</h6></C.TableTitle2></C.TableTitle>
                    <label>
                        {sentOutside}
                        <input value={valueEUA} type="number" /><select><option>{coinEUA}</option></select>
                    </label>
                    <p>Custo da Employ<span>1%</span></p><hr color="#e6eaed" size="1" />
                    <p>Cotação agora<span>{price}</span></p><hr color="#e6eaed" size="1" />
                    <label>
                        {arriveAccount}
                        <input value={valueBR} type="number" /><select><option>{coinBR}</option></select>
                    </label>
                    <C.TableButton background={buttonColor}><button type="button">{button}</button></C.TableButton>
                </C.Table>
            </C.HeaderItems>
        </C.Header>
        <C.Transparency variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
            <C.Items>
                <C.Items1 variants={item}>
                    <h2>aqui não tem letrinha miúda</h2>
                    <p>Não usamos o câmbio manipulado que os bancos chamam de <br></br>spread.</p>
                    <p>Te pagamos pela câmbio real, com a cotação que você pode ver <br></br>no Google, <span>porque isso é o justo.</span></p>
                    <p>Nas transferências em que o IOF é cobrado, você sempre vai saber<br></br> o valor exato aplicado</p>
                    <button type="button">começar agora</button>
                </C.Items1>
                <C.Items2 variants={item}>
                    <img src="/images/Curious-rafiki.svg" alt="Lupa" />
                </C.Items2>
            </C.Items>
        </C.Transparency>
        <C.When variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
            <C.WhenItems variants={item}>
                <h2>quando usar a Employ?</h2>
                <p><img src="/images/selecionado.png" alt="Selecionado" />Para receber de empresas do exterior</p>
                <p><img src="/images/selecionado.png" alt="Selecionado" />Para receber da <a href="https://www.twitch.tv/" rel="noreferrer">Twitch</a> e outras plataformas</p>
                <p><img src="/images/selecionado.png" alt="Selecionado" />Para fazer transferências de alto volume</p>
                <p><img src="/images/selecionado.png" alt="Selecionado" />Para investir no exterior, comprar ações, títulos e outros ativos</p>
                <button type="button">acesse agora</button>
                <span><img src="/images/cursor.png" alt="Cursor" /></span>
            </C.WhenItems>
        </C.When>
        <C.Rate variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
            <C.RateItems>
                <C.RateImage variants={item}>
                    <img src="/images/Currency-pana.svg" alt="Money" />
                </C.RateImage>
                <C.RateText>
                    <C.RateTextItems variants={item}>
                        <h2>tudo isso por <span>apenas 1%</span><br></br>de taxa por transferência</h2>
                        <p>Aqui não tem letrinha pequena, nem tarifa<br></br>oculta ou surpresas desagradáveis.</p>
                        <p>É tudo claro, simples e rápido!</p>
                        <button type="button">quero começar</button>
                    </C.RateTextItems>
                </C.RateText>
            </C.RateItems>
        </C.Rate>
        <C.RateBox></C.RateBox>
        <C.Question variants={container} initial='hidden' exit='exit' whileInView='show' viewport={{once: false}}>
            <C.QuestionItems>
                <C.QuestionTitle variants={item}>
                    <h5><BsQuestionLg /> tire suas dúvidas</h5>
                    <h2>perguntas frequentes</h2>
                </C.QuestionTitle>
                <C.QuestionText variants={item}>
                    <details>
                        <summary>
                            O que é a Employ?
                        </summary>
                            Employ é uma plataforma digital de câmbio.
                    </details>
                    <hr color="#e6eaed" size="1" />
                    <details>
                        <summary>
                            Qual o custo da Employ?
                        </summary>
                            O preço é de apenas 1%.
                    </details>
                    <hr color="#e6eaed" size="1" />
                    <details>
                        <summary>
                            Em quanto tempo meu dinheiro chega?
                        </summary>
                            Algumas transferências chegam em até 2 horas.<br></br>
                            A grande maioria chega em até 1 dia útil.
                    </details>
                    <hr color="#e6eaed" size="1" />
                    <details>
                        <summary>
                            Quais transferências posso fazer?
                        </summary>
                            Você pode receber qualquer tipo de transferência<br></br>
                            do exterior para o Brasil pela Employ.
                    </details>
                    <hr color="#e6eaed" size="1" />
                    <details>
                        <summary>
                            Meu pagamento já chegou?
                        </summary>
                            Sempre enviamos uma notificação por email e pelo<br></br>
                            app quando seu pagamento chega.<br></br>
                            Se essa mensagem ainda não apareceu, é porque<br></br>
                            ainda não chegou na Employ.
                    </details>
                    <C.QuestionButton>
                        <motion.div variants={item}>
                            <h2>ainda tem dúvidas?</h2>
                            <div><button type="button" onClick={() => setModal(!modal)}>fale com a gente</button></div>
                        </motion.div>
                    </C.QuestionButton>
                </C.QuestionText>
            </C.QuestionItems>
        </C.Question>
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

export default Home;