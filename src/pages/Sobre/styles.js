import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)``;

export const Navbar = styled.div`
    display: flex;
    justify-content: space-evenly;
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
    max-width: 1200px;
    gap: 50px;
    padding: 80px 100px;
    img{
        width: 500px;
    };
    h2{
        margin-top: 100px;
        font-size: 30px;
    };
    span{
        color: blue;
    };
    p{
        color: #707070;
        margin-top: 10px;
    };
    @media (max-width: 880px){
       flex-direction: column;
       align-items: center;
       gap: 0px;
    };
    @media (max-width: 700px){
        gap: 0px;
        padding: 0px 0px;
        img{
            width: 310px;
            margin-top: 70px;
        };
        h2{
            margin-top: 30px;
        };
    };   
`;

export const HeaderText = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    gap: 50px;
    padding: 30px 100px;
    img{
        width: 400px;
    };
    h2{
        margin-top: 130px;
        font-size: 28px;
    };
    p{
        color: #707070;
        margin-top: 10px;
    };
    @media (max-width: 880px){
        flex-direction: column-reverse;
        align-items: center;
        gap: 0px;
        p{
            margin-bottom: 40px;
        };
    };
    @media (max-width: 700px){
        gap: 0px;
        padding: 0px 0px;
        img{
            width: 300px;
            margin-top: 70px;
        };
        h2{
            margin-top: 30px;
            width: 250px;
        };
        p{
            width: 300px;
        };
    };   
`;

export const Info = styled(motion.div)`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 70px 0px 100px 0px;
    padding: 30px 0px 40px 0px;
    background: #EFF3F5;
    img{
        width: 400px;
    };
    h3{
        font-size: 30px;
        color: blue;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
    };
    p{
        font-size: 17px;
        font-weight: 500;
    };
    @media (max-width: 550px){
        h3{
            font-size: 25px;
        };
        p{
            font-size: 16px;
            width: 270px;
            text-align: center;
        };
    }; 
`;

export const Choice = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin-bottom: 180px;
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