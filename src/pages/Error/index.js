import * as C from "./styles";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

let easeing = [0.6, -0.5, 0.01, 0.99];

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


const Error = () => {

    return(
        <C.Container initial='initial' animate='animate'>
            <C.Header variants={header}>
               <p>4</p><img src="/images/moon.png" alt="Lua" /><p>4</p>
            </C.Header>
            <C.Text variants={header}>
                <motion.h2>oops! acho que nos perdemos...</motion.h2>
                <p>A página que você procura não existe<br></br>ou está em manutenção.</p>
                <Link to="/">voltar ao início</Link>
            </C.Text>
        </C.Container>
    )
};

export default Error;