import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    border-radius: 20px;
    box-shadow: 1px 1px 10px #000;
    height: 500px;
    width: 980px;
    margin: auto;
    margin-top: -20px;
`;

export const Buttons = styled.div`
    display: flex;
    width: 900px;
    justify-content: center;
`

export const Button1 = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    margin-top: 10px;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    background: none;
    border: 1px solid #CCC;
    border-radius: 15px;
    margin-right: 10px;

    &:hover {
        background-color: #EEE
    }
`

export const InitialValue = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
`

export const DataArea = styled.div`
    width: 430px;
    height: 350px;
`;

export const ResultArea = styled.div`
    width: 430px;
    height: 350px;
    border-radius: 20px;
    box-shadow: 1px 1px 8px #ccc
`;

export const AreaInput = styled.div`
    margin-top: 10px;
`;

export const Area1 = styled.div`
    p {
        font-size: 17px;
        font-weight: bold
    }
`

export const Area2 = styled.div`
    display: flex;
    align-items: center;
    p {
        margin: 0;
        font-size: 18px;
    };
    img {
        height: 24px;
        width: 24px;
    }
`

export const Input1 = styled.input`
    height: 40px;
    margin-left: 10px;
    border-radius: 20px;
    padding: 15px;
    border: 0;
    outline: 0;
    font-size: 18px;
    border: 1px solid #EEE
`;

export const Taxes = styled.div`
    margin-top: 50px;
`

export const Total = styled.div`
    display: flex;
    background-color: rgb(27, 29, 40);
    padding: 10px;
    color: #FFF;
    align-items: center;
    flex-direction: column;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    h2 {
        margin: 0
    }
`

export const Results = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    margin-top: 10px;
    p {
        width: 120px;
        margin: 0;
    }
    .title {
        font-size: 17px;
        font-weight: bold
    }
`

