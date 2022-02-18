import styled from "styled-components/native"

export const Container = styled.View `
    background: #FFF;
    flex:1;
    justify-content: center;
    align-items: center;
`
export const Content = styled.View `
    background: #FFF;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5%;
    right: 5%;

`

export const Button = styled.TouchableOpacity `
    background-color: rgb(69, 219, 248);
    padding: 20px;
    margin: 10px;
    border-radius: 100px;
`

export const ButtonText = styled.Text `
    color: #FFFF;
`


export const Title = styled.Text `
    color: #000000;
    font-size: 30px;
    text-align: center;
`

export const CardList = styled.View `
    background: lightgray;
    align-items: center;
    height: 20px;
`

export const Search = styled.TextInput `
    background-color: lightgray;
    padding: 10px;
    justify-content: flex-start;
    width: 50%;
    border-radius: 10px;
    
`

export const Procurar = styled.TouchableOpacity `
    align-items: center;
    background-color: rgb(69, 219, 248);
    padding: 15px;
    height: 100%;
    border-radius: 10px;
    margin-left: 5px;

`

export const Header = styled.View `
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 0px;
    justify-content: center;
    position: absolute;
    top: 5%;
`