import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)``;

export const Navbar = styled(motion.div)`
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

export const Login = styled.div`
    button{
        background: none;
        border: none;
        color: #747575;
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
        display: flex;
        margin-top: 25px;
        justify-content: center;
        transition: ease-in-out 0.3s;
        &:hover {
            color: blue;
        };
        p{
            margin-top: -1px;
            margin-right: 10px;
        };
    };
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeaderItems = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 50px 0px 120px 0px;
    max-width: 1360px;
    gap: 90px;
    @media (max-width: 900px){
       flex-direction: column;
       align-items: center;
    };
`;

export const Text = styled.div`
    h2{
        font-size: 33px;
    };
    h6{
        color: #707070;
        margin: 15px 0px 80px 0px;
        font-size: 16px;
        font-weight: 500;
    };
    p{
        color: #707070;
        font-size: 15px;
    };
    h4{
        font-size: 17px;
        margin-bottom: 5px;
    }
    h5{
        color: #a784ff;
        background: #e9e0ff;
        width: 200px;
        height: 26px;
        border-radius: 20px;
        font-size: 12px;
        text-align: center;
        padding-top: 4px;
        margin: 40px 0px 15px 0px;
    };
    @media (max-width: 550px){
        h2{
            width: 300px;
        };
        h6{
            width: 300px;
        };
    };
`;

export const Table = styled(motion.div)`
    width: 300px;
    height: 480px;
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 10px 30px 10px 30px;
    p{
        font-size: 14px;
        margin-top: -15px;
    };
    h5{
        font-weight: 500;
        font-size: 16px;
        padding: 0;
        margin: 20px 0px 20px 0px;
    };
    h6{
        font-weight: 500;
        font-size: 16px;
        padding: 0;
        margin: 20px 0px 20px 0px;
        cursor: pointer;
    };
    label{
        font-size: 14px;
    };
    hr{
        margin-bottom: 35px;
        margin-top: 5px;
    };
    input{
        border-radius: 10px;
        background: #EFF3F5;
        border: 0 none;
        width: 200px;
        height: 35px;
        padding: 0px 15px 0px 80px;
        margin-top: 7px;
        margin-bottom: 20px;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        &:focus{
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        };
    };
    span{
        font-weight: bold;
        padding-left: 140px;
    };
    select{
        position: relative;
        top: -53px;
        right: -2px;
        border: 1px solid #E8EAED;
        border-radius: 10px;
        background: white;
        box-shadow: 0 1px 3px -2px #9098A9;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        padding: 6px 7px 6px 7px;
        &:focus{
            outline: 0;
        };
    };
    
`;

export const TableButton = styled.div`
    display: flex;
    justify-content: center;
    button{
        background: ${props => props.background};
        border: none;
        color: white;
        text-align: center;
        margin-top: -10px;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 20px;
        width: 250px;
        height: 45px;
        cursor: pointer;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        transition: ease-in-out 0.3s;
        &:hover {
            opacity: 0.8;
        };
    };
`;

export const TableTitle = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const TableTitle1 = styled.div`
    color: ${props => props.color};
    cursor: pointer;
`;

export const TableTitle2 = styled.div`
    color: ${props => props.color};
`;

export const Transparency = styled(motion.div)`
    background: #F2F7FA;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    h2{
        font-size: 31px;
        margin: 80px 0px 40px 0px;
        @media (max-width: 960px){
            margin-top: 90px;
        };
    };
    p{
        font-size: 16px;
        margin-bottom: 25px;
        color: #707070;
    };
    span{
        font-weight: 700;
    };
    button{
        background: #57B2F9;
        border: none;
        color: white;
        text-align: center;
        margin: 30px 0px 50px 0px;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 20px;
        width: 180px;
        height: 35px;
        cursor: pointer;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        transition: ease-in-out 0.3s;
        &:hover {
            opacity: 0.8;
        };
        @media (max-width: 960px){
            margin-bottom: 90px;
        };
    };
`;

export const Items = styled.div`
    max-width: 1360px;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 960px){
        flex-direction: column;
        align-items: center;
    };
`;

export const Items1 = styled(motion.div)`
    margin-left: 50px;
    @media (max-width: 960px){
        margin-left: 0px;
    };
    @media (max-width: 550px){
        h2{
            width: 300px;
        };
        p{
            width: 270px;
        };
    };
`;

export const Items2 = styled(motion.div)`
    padding-top: 10px;
    img{
        margin:0;
        padding:0;
        width: 500px;
        @media (max-width: 960px){
            display: none;
            max-width: 500px;
        };
    };
`;

export const When = styled(motion.div)`
    display: flex;
    justify-content: center;
`;

export const WhenItems = styled(motion.div)`
    h2{
        font-size: 31px;
        margin-bottom: 30px;
        @media (max-width: 960px){
            margin-top: 70px;
        };
    };
    p{
        margin-bottom: 25px;
        color: #707070;
        img{
            position: relative;
            right: 10px;
        };
    };
    span{
        position: relative;
        top: 40px;
        left: 40px;
    };
    button{
        background: blue;
        border: none;
        color: white;
        text-align: center;
        margin: 30px 0px 170px 0px;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 20px;
        width: 180px;
        height: 35px;
        cursor: pointer;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        transition: ease-in-out 0.3s;
        &:hover {
            opacity: 0.8;
        };
        @media (max-width: 960px){
            margin: 30px 0px 230px 0px;
        };
    };
    @media (max-width: 550px){
        h2{
            width: 300px;
        };
        p{
            width: 270px;
        };
    };
`;

export const Rate = styled(motion.div)`
    display: flex;
    justify-content: center;
`;

export const RateItems = styled.div`
    max-width: 1660px;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 960px){
        flex-direction: column;
    };
};
`;

export const RateText = styled.div`
    background: #13191C;
    color: white;
    width: 460px;
    height: 480px;
    border-radius: 0px 0px 50px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 480px;
    @media (max-width: 550px){
       width: 350px;
       height: 370px;
    };
`;

export const RateTextItems = styled(motion.div)`
    h2{
        font-size: 27px;
    };
    p{
        margin-top: 30px;
    };
    span{
        color: #57B2F9;
        background: white;
        padding: 0px 5px 0px 5px;
    };
    button{
        background: #57B2F9;
        border: none;
        color: white;
        text-align: center;
        margin: 30px 0px 50px 0px;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 20px;
        width: 180px;
        height: 35px;
        cursor: pointer;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        transition: ease-in-out 0.3s;
        &:hover {
            opacity: 0.8;
        };
    };
    @media (max-width: 550px){
        h2{ 
            font-size: 20px;
        };
        p{
            width: 270px;
        };
        button{
            margin: 60px 0px 20px 0px;
        };
    };
`;

export const RateImage = styled(motion.div)`
    width: 500px;
    margin-bottom: 2px;
    @media (max-width: 960px){
        display: none;
    };
`;

export const RateBox = styled.div`
    height: 300px;
    background: #F2F7FA;
    position: relative;
    bottom: 325px;
    z-index: -1;
    @media (max-width: 960px){
        bottom: 300px;
    };
`;

export const Question = styled(motion.div)`
    margin-top: -200px;
    display: flex;
    justify-content: center;
`;

export const QuestionItems = styled.div`
    max-width: 1660px;
    display: flex;
    gap: 100px;
    justify-content: space-evenly;
    @media (max-width: 960px){
        flex-direction: column;
        gap: 0px;
    };
`;

export const QuestionText = styled(motion.div)`
    margin-top: 35px;
    details{
        color: #707070;
        font-size: 15px;
        summary{
            margin: 50px 0px 20px 0px;
            cursor: pointer;
            font-weight: 500;
            font-size 19px;
            color: #4F585A;
        };
    };
    hr{
        width: 400px;
        margin-top: 25px;
    };
    @media (max-width: 550px){
        details{
            font-size: 14px;
            summary{
                font-size 16px;
            };
        };
        hr{
            width: 320px;
        };
    };
`;

export const QuestionTitle = styled(motion.div)`
    h2{
        font-size: 30px;
        font-weight: 600;
    };
    h5{
        color: #a784ff;
        background: #e9e0ff;
        width: 150px;
        height: 26px;
        border-radius: 20px;
        font-size: 12px;
        text-align: center;
        padding-top: 4px;
        margin: 100px 0px 15px 0px;
    };
    @media (max-width: 550px){
        h2{ 
            font-size: 24px;
        }
    };
`;

export const QuestionButton = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    div{
        div{
            display: flex;
            justify-content: center;
            margin-bottom: 180px;
            button{
                background-color: #fff;
                border: 1px solid #A784FF;
                border-radius: 20px;
                box-sizing: border-box;
                margin-top: 10px;
                color: #A784FF;
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
                @media (max-width: 550px){
                    font-size: 15px;
                    width: 165px;
                    height: 38px;
                };
            };
            button:hover {
                background-color: #A784FF;
                color: #fff;
            };
        };
        @media (max-width: 550px){
            h2{ 
                font-size: 20px;
            }
        };
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
