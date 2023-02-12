import styled, { keyframes } from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    aling-items: center
`;

export const rotate = keyframes`
    0%, 100%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-50px);
    }
`;

export const Header = styled(motion.div)`
    display: flex;
    justify-content: center;
    p{
        font-size 140px;
        font-weight: 600;
        color: #707070;
    };
    img{
        width: 130px;
        height: 130px;
        margin: 30px 20px 0px 20px;
        animation: ${rotate} 5s ease-in-out infinite;
    };
`;


export const Text = styled(motion.div)`
    text-align: center;
    margin-top: 50px;
    h2{
        font-size: 30px;
    };
    p{
        color: #707070;
        margin: 25px 0px 40px 0px;
    };
    a{
        text-decoration: none;
        background: blue;
        border: none;
        color: white;
        border-radius: 20px;
        padding: 11px 18px;
        cursor: pointer;
        font-weight: 500;
        transition: ease-in-out 0.3s;
        &:hover {
            opacity: 0.8;
        };
    };
`;

