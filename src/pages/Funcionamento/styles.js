import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    p{
        color: #707070;
        margin-top: 10px;
    };
`;

export const Navbar = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 70px;
    padding: 0px 40px 0px 40px;
    border-bottom: 1px solid #F2F7FA;
    @media (max-width: 800px){
        justify-content: space-between;
    };
`;

export const User = styled(motion.div)`
    @media (max-width: 800px){
        display: none;
    };
`;

export const Bars = styled(motion.div)`
    display: none;
    @media (max-width: 800px){
        display: block;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 18px;
    };
`;

export const Title = styled.div`
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span{
        color: blue;
    };
`;

export const Links = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 15px;
    ul{
        display: flex;
        list-style-type: none;
        li{
            transition: all 1000ms;
        };
        a{
            text-decoration: none;
            color: #747575;
            font-weight: 500;
            padding-right: 40px;
            transition: 0.3s;
            &:hover {
                 color: blue;
            };
            span{
                color: blue;
            };
        };
    };
    @media (max-width: 800px){
        display: none;
    };
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeaderTitle = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
    padding: 30px 100px;
    @media (max-width: 1100px){
        padding: 30px 0px;
        justify-content: center;
        gap: 70px;
    };
    @media (max-width: 850px){
        padding: 30px 0px;
        flex-direction: column;
        align-items: center;
        gap: 0px;
    };
    div{
        margin-top: 70px;
    };
    h2{
        margin-top: 3px;
        font-size: 30px;
        color: blue;
        background: #F2F7FA;
        padding: 35px;
        @media (max-width: 1100px){
            font-size: 25px;
            padding: 40px 25px 40px 25px;
        };
        @media (max-width: 850px){
            font-size: 22px;
            padding: 40px 20px 40px 20px;
        };
    };
    span{
        font-weight: 600;
    };
    p{
        margin: 35px 0px 0px 50px;
        width: 460px;
        text-align: justify;
        @media (max-width: 1100px){
            width: 250px;
            margin: 0px 0px 20px 0px;
        };
        @media (max-width: 850px){
            width: 200px;
            margin: 0px 0px 20px 0px;
        };
    };  

`;

export const HeaderText = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
    padding: 30px 100px;
    @media (max-width: 1100px){
        padding: 30px 0px;
        justify-content: center;
        gap: 70px;
    };
    @media (max-width: 850px){
        gap: 40px;
    };
    h2{
        margin-top: 130px;
        font-size: 28px;
        @media (max-width: 1100px){
            font-size: 22px;
        };
        @media (max-width: 850px){
            font-size: 20px;
            width: 200px;
        };
    };
    p{
        margin-top: 20px;
        width: 460px;
        text-align: justify;
        @media (max-width: 1100px){
            width: 250px;
        };
        @media (max-width: 850px){
            width: 200px;
        };
    };
    img{
        margin-top: 130px;
        @media (max-width: 850px){
            width: 60px;
            margin-top: 140px;
        };
    };    
`;

export const HeaderText2 = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
    padding: 30px 100px;
    @media (max-width: 1100px){
        padding: 30px 0px;
        justify-content: center;
        gap: 70px;
    };
    @media (max-width: 850px){
        gap: 40px;
    };
    h2{
        margin-top: 130px;
        font-size: 28px;
        @media (max-width: 1100px){
            font-size: 22px;
        };
        @media (max-width: 850px){
            font-size: 20px;
            width: 200px;
        };
    };
    p{
        width: 460px;
        text-align: justify;
        margin-top: 20px;
        @media (max-width: 1100px){
            width: 250px;
        };
        @media (max-width: 850px){
            width: 200px;
        };
    };
    img{
        margin-top: 160px;
        @media (max-width: 850px){
            width: 60px;
            margin-top: 140px;
        };
    };
    
    span{
        font-weight: 600;
    };    
`;

export const HeaderText3 = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
    padding: 30px 100px;
    @media (max-width: 1100px){
        padding: 30px 0px;
        justify-content: center;
        gap: 70px;
    };
    @media (max-width: 850px){
        gap: 40px;
    };
    h2{
        margin-top: 140px;
        font-size: 28px;
        @media (max-width: 1100px){
            font-size: 22px;
        };
        @media (max-width: 850px){
            font-size: 20px;
            width: 200px;
        };
    };
    p{
        width: 460px;
        text-align: justify;
        margin-top: 20px;
        @media (max-width: 1100px){
            width: 250px;
        };
        @media (max-width: 850px){
            width: 200px;
        };
    };
    img{
        margin-top: 160px;
        @media (max-width: 850px){
            width: 60px;
            margin-top: 160px;
        };
    };
    span{
        font-weight: 600;
    };    
`;

export const HeaderText4 = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
    padding: 30px 100px;
    @media (max-width: 1100px){
        padding: 30px 0px;
        justify-content: center;
        gap: 70px;
    };
    @media (max-width: 1100px){
        padding: 30px 0px;
        justify-content: center;
        gap: 70px;
    };
    h2{
        margin-top: 130px;
        font-size: 28px;
        @media (max-width: 1100px){
            font-size: 22px;
        };
        @media (max-width: 850px){
            font-size: 20px;
            width: 200px;
        };
    };
    p{
        width: 460px;
        text-align: justify;
        margin-top: 20px;
        @media (max-width: 1100px){
            width: 250px;
        };
        @media (max-width: 850px){
            width: 200px;
        };
    };
    img{
        margin-top: 130px;
        @media (max-width: 850px){
            width: 60px;
            margin-top: 140px;
        };
    };
    span{
        font-weight: 600;
    };    
`;

export const Choice = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin: 80px 0px 180px 0px;
    div{
        text-align: center;
    };
    h3{
        font-size: 28px;
    };
    span{
        color: blue;
    };
    button{
        background-color: #fff;
        border: 1px solid blue;
        border-radius: 20px;
        box-sizing: border-box;
        color: blue;
        cursor: pointer;
        width: 200px;
        height: 40px;
        display: inline-block;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1;
        text-align: center;
        text-decoration: none #0d172a solid;
        text-decoration-thickness: auto;
        transition: all .1s cubic-bezier(.4, 0, .2, 1);
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        margin-top: 10px;
      };
    button:hover {
        background-color: blue;
        color: #fff;
    };
`;

export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    button{
        background: blue;
        border: none;
        color: white;
        border-radius: 20px;
        margin: 20px 0px 40px 0px;
        height: 40px;
        width: 350px;
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
        transition: ease-in-out 0.3s;
        &:hover {
            opacity: 0.8;
        };
    };
    input{
        border: 1px solid #DFE2E9;
        border-radius: 6px;
        margin-top: 15px;
        height: 40px;
        width: 350px;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 18px;
        :focus{
            outline: none;
            border-color: blue;
            box-shadow: 0 0 2px blue;
        }
    };
    textarea{
        resize: none;
        outline: none;
        border: 1px solid #DFE2E9;
        border-radius: 6px;
        font-size: 18px;
        font-family: 'Inter', sans-serif;
        width: 350px;
        margin-top: 15px;
        height: 200px;
        padding: 10px;
    };
`;
