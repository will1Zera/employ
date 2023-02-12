import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    font-size: 15px;
    color: white;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-around;
    background: #06132D;
    width: 100wv;
    height: 230px;
    h2{
        font-size: 30px;
        font-weight: 700;
        margin: 50px 0px 20px 0px;
    }
    span{
        color: blue;
        font-size: 35px;
    }
    h3{
        font-size: 18px;
        font-weight: 700;
        margin: 50px 0px 15px 0px;
    }
`;

export const Title = styled(motion.div)`
    @media (max-width: 550px){
        h2{
            font-size: 26px;
        };
    };
`;


export const Social = styled.div`
    a{
        cursor: pointer;
        font-size 26px;
        color: white;
        margin-right: 20px;
        transition: ease-in-out 0.3s;
            &:hover{
                color: blue;
            }
        @media (max-width: 550px){
            font-size: 23px;
        };
    }; 
`;

export const Info = styled(motion.div)`
    display: flex;
    flex-direction: column;
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li{
            padding-bottom: 5px;
        }
        a{
            text-decoration: none;
            font-weight: 500;
            color: white;
            transition: ease-in-out 0.3s;
            &:hover{
                color: blue;
            }
        }
      }
`;
