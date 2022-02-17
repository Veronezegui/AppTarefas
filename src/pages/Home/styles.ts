import styled from 'styled-components/native';

export const Container = styled.View `
    background: #FFF;
    flex:1;
    justify-content: center;
    align-items: center;
`
export const Content = styled.View `
    background: #000000;
    justify-content: center;
    align-items: center;
`


export const Paragrafos = styled.Text `
    color: #000000;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    font-family: ${({theme}) => theme.fonts.title1}
`

export const Imagem = styled.View `
    width: 100px;
    justify-content: center;
    align-items: center;
`

export const Button = styled.TouchableOpacity `
    justify-content: center;
    align-items: center;
    background-color: #3EBCF5;
    padding: 20px;
    margin-top: 20px;
    height: 60px;
    border-radius: 20px;
`

export const ButtonText = styled.Text `
    color: #FFFF;
    font-weight: bold;
`
