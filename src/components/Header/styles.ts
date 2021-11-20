import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    height: 130px;
    background-color: rgb(27, 29, 40);
`

export const Container = styled.div`
    display: flex;
    height: 50px;
    width: 980px;
    align-items: center;
    margin: auto;

    img {
        width: 48px;
        height: 48px;
        margin-right: 25px;
    },

    h1 {
        font-size: 25px;
        color: #FFF;
    }
`