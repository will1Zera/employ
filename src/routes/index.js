import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Error from "../pages/Error";
import Sobre from "../pages/Sobre";
import Funcionamento from "../pages/Funcionamento";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const RoutesApp = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/funcionamento' element={<Funcionamento />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}; 

export default RoutesApp;