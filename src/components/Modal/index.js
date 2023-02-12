import * as C from "./styles";
import { CgClose } from 'react-icons/cg';
import { AnimatePresence } from 'framer-motion';

const Modal = ({children, estado, changeEstado}) =>{
    return(
        <AnimatePresence>
            {estado &&
                <C.Overlay>
                    <C.Modal initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 0 }}>
                        <C.Button onClick={() => changeEstado(false)}><CgClose /></C.Button>

                        {children}
                    </C.Modal>
                </C.Overlay>
            }
        </AnimatePresence>
    );
};

export default Modal;