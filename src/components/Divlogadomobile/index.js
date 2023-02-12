import * as C from "./styles";
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Divlogadomobile = () =>{

    const { signout } = useAuth();
    const navigate = useNavigate();

    return(
        <>
           <C.Login>
                <button type="button" onClick={() => [signout(), navigate("/")]}><p>sair</p><FiLogOut /></button>
            </C.Login>
        </>
    );
};

export default Divlogadomobile;