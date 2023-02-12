import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Swal from 'sweetalert2'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

let easeing = [0.6, -0.5, 0.01, 0.99];


const Signup = () => {

  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () =>{
    const regEx = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
    if (!email | !emailConf | !senha){
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf){
      setError("Os e-mails não são iguais");
      return;
    } else if (!regEx.test(email)){
      setError("O e-mail não é válido");
      return;
    };

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    };

    Swal.fire({
      title: 'O usuário foi cadastrado com sucesso',
      timer: 10000
    });
    navigate("/");
  };

  const [state, setState] = useState(false);

  const toggleBtn = () =>{
    setState(prevState => !prevState);
  }

  return(
    <C.Container>
      <motion.div initial={{opacity: 0, scale: 0}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{duration: 0.3, ease: easeing}}>
        <h2>Cadastre-se na</h2>
        <h1><span>.</span>Employ</h1>
        <label>
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]} />
        </label>
        <label>
          <input type="email" placeholder="Confirmação e-mail" value={emailConf} onChange={(e) => [setEmailConf(e.target.value), setError("")]} />
        </label>
        <label>
          <input type={state ? "text" : "password"} placeholder="Senha" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]} />
          <button onClick={toggleBtn}>{state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</button>
        </label>
        <C.Label>{error}</C.Label>
        <button type="button" onClick={handleSignup}>Criar conta</button>
      </motion.div>
      <motion.div initial={{opacity: 0, scale: 0}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{duration: 0.8, ease: easeing}}>
        <p>Já é um usuário? <Link to="/signin">Entrar</Link></p>
      </motion.div>
    </C.Container>
  );
};

export default Signup;