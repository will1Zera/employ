import styled from "styled-components";

export const Login = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    a{
        text-decoration: none;
        color: black;
        margin: 26px 0px 0px 0px;
        font-size 17px;
        &:hover {
            color: blue;
       };
       left: 30px;
       position: relative;
    };
    span{
        background: blue;
        border: none;
        color: white;
        border-radius: 20px;
        padding: 11px 18px;
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
        transition: ease-in-out 0.3s;
        left: -30px;
        position: relative;
        &:hover {
            opacity: 0.8;
        };
    };
`;