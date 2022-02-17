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
    flex-direction: row;
`

export const Button = styled.TouchableOpacity `
    justify-content: center;
    align-items: center;
    background-color: rgb(69, 219, 248);
    padding: 20px;
    margin: 10px;
    height: 60px;
    border-radius: 20px;
`

export const ButtonText = styled.Text `
    color: #FFFF;
`


export const Title = styled.Text `
    color: #000000;
    font-size: 50px;
    text-align: center;
    margin-top: 30px;
`

export const CardList = styled.View `
    background: lightgray;
    align-items: center;
    height: 20px;
    position: absolute;
    top: 20px;
`

export const Search = styled.TextInput `
    width: 300px;
    padding: 20px;
`