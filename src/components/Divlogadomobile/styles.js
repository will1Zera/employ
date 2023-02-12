import styled from "styled-components";

export const Login = styled.div`
    button{
        background: none;
        border: none;
        color: black;
        cursor: pointer;
        font-weight: 500;
        font-size: 17px;
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