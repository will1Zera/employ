import * as C from "./styles";
import { FaTimes } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Divlogadomobile from '../../components/Divlogadomobile';
import Divdeslogadomobile from '../../components/Divdeslogadomobile';
import useAuth from "../../hooks/useAuth";

const Sidebar = ({ active }) => {

    const closeSidebar = () =>{
        active(false)
    };
    
    const { signed } = useAuth();

    return(
       <AnimatePresence>
            <C.Overlay>
                <C.Bar sidebar={active}
                    animate={{
                        width: active ? "200px" : "-10px",
            
                        transition: {
                          duration: 0.5,
                          type: "spring",
                          damping: 20,
                        },
                      }}
                >
                    <C.Icon><FaTimes onClick={closeSidebar}/></C.Icon>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/sobre">sobre</Link></li>
                        <li><Link to="/funcionamento">funcionamento</Link></li>
                        <C.User>
                            {signed > 0 ? <Divlogadomobile /> : <Divdeslogadomobile />}
                        </C.User>
                    </ul>
                </C.Bar>
            </C.Overlay>
       </AnimatePresence>
    )
};

export default Sidebar;