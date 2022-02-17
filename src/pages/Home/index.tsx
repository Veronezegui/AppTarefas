import React from "react";
import { Container, Paragrafos, Imagem, Button, ButtonText } from "./styles";
import { Image } from "react-native"

import Lista from '../../assets/list.png'

import {useNavigation} from '@react-navigation/native'



export function Home() {
    const navigation = useNavigation();

    function handleHome() {
        navigation.navigate('ListaTarefas')
    }
    
    return (
        <Container>
            <Image source={require('../../assets/list.png')}
            style={{height: 100, resizeMode: "contain", marginBottom: 20}}
            />
            <Paragrafos>
                Bem vindo! {'\n'} A sua 
                lista de tarefas.
            </Paragrafos>
            <Button
                onPress={handleHome}
            >
                <ButtonText>
                    Começar
                </ButtonText>
            </Button>
        </Container>
    )
}