import * as C from "./styles";
import { Link } from 'react-router-dom';


const Divdeslogado = () =>{
    return(
        <>
           <C.Login>
                <Link to="/signin">entrar</Link>
                <Link to="/signup"><span>criar conta</span></Link>
            </C.Login>
        </>
    );
};

export default Divdeslogado;