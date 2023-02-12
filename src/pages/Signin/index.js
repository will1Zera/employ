import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

let easeing = [0.6, -0.5, 0.01, 0.99];

const Signin = () => {
  
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () =>{
    if (!email | !senha){
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res){
      setError(res);
      return;
    }

    navigate("/");
  };
  
  return(
    <C.Container>
      <motion.div initial={{opacity: 0, scale: 0}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{duration: 0.3, ease: easeing}}>
        <h2>Bem-vindo à</h2>
        <h1><span>.</span>Employ</h1>
        <label>
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} />
        </label>
        <label>
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} />
        </label>
        <C.Label>{error}</C.Label>
        <button type="button" onClick={handleLogin}>Entrar</button>
      </motion.div>
      <motion.div initial={{opacity: 0, scale: 0}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{duration: 0.8, ease: easeing}}>
        <p>Não é um usuário? <Link to="/signup">Cadastre-se</Link></p>
      </motion.div>
    </C.Container>
  );
};

export default Signin;