import styled from "styled-components";
import { motion } from 'framer-motion';

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
`;

export const Icon = styled.div`
    cursor: pointer;
    font-size: 20px;
    position: fixed;
    top: 20px;
    left: 20px;
`;

export const User = styled.div`
    margin-top: 60px;
`;

export const Bar = styled(motion.div)`
    background-color: white;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 200px;
    animation: showSidebar 0.4s;
    display: flex;
    justify-content: center;

    ul{
        list-style-type: none;
        margin: 100px 0px 0px 30px;
        li{
            transition: all 1000ms;
            font-size: 18px;
            margin-bottom: 30px;
        };
        a{
            text-decoration: none;
            font-weight: 500;
            padding-right: 40px;
            transition: 0.3s;
            color: black;
            &:hover {
                 color: blue;
            };
        };
    };

    @keyframes showSidebar{
        from{
            opacity: 0;
            width: 0;
        }
        to{
            opacity: 1
            width: 250px;
        }
    }
`;