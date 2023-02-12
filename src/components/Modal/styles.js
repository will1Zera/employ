import styled from "styled-components";
import { motion } from 'framer-motion';

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
`;

export const Modal = styled(motion.div)`
    width: 500px;
    min-height: 100px;
    background: white;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

export const Button = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: 0.3s ease all;
    border-radius: 5px;
    color: blue;
    font-size: 20px;
    padding-top: 5px;
    &:hover{
        background: #f2f2f2;
    }
`;