import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    div{
        display: flex;
        flex-direction: column;
    };
    h2{
        font-size: 17px;
    };
    h1{
        padding: 0;
        margin: 0px 0px 0px 0px;
        font-size: 35px;
    };
    span{
        color: blue;
    };
    input{
        border: 1px solid #DFE2E9;
        border-radius: 6px;
        margin-top: 30px;
        height: 38px;
        width: 270px;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 18px;
        :focus{
            outline: none;
            border-color: blue;
            box-shadow: 0 0 2px blue;
        }
    };
    label{
        button{
            background: white;
            color: grey;
            width: 26px;
            border-radius: 0px;
            margin-left: -30px;
            height: 25px;
            &:hover {
                color: black;
                opacity: 1;
            };
        };
    };
    button{
        background: blue;
        border: none;
        color: white;
        border-radius: 20px;
        margin-top: 30px;
        height: 42px;
        width: 280px;
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
        transition: ease-in-out 0.3s;
        &:hover {
            opacity: 0.8;
        };
    };
    p{
        margin-top: 30px;
        a{
            text-decoration: none;
            color: blue;
            font-weight: 500;
            transition: ease-in-out 0.3s;
            &:hover {
                opacity: 0.8;
            };
        }; 
    };
`;

export const Label = styled.label`
    font-size: 14px;
    color: red;
    margin-top: 10px;
`;