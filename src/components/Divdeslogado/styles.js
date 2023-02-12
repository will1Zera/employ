import styled from "styled-components";

export const Login = styled.div`
    display: flex;
    justify-content: center;
    gap: 40px;
    a{
        text-decoration: none;
        color: #707070;
        margin-top: 26px;
        font-size 15px;
        &:hover {
            color: blue;
       };
    };
    span{
        background: blue;
        border: none;
        color: white;
        border-radius: 20px;
        padding: 11px 18px;
        cursor: pointer;
        font-weight: 500;
        font-size: 14px;
        transition: ease-in-out 0.3s;
        &:hover {
            opacity: 0.8;
        };
    };
`;