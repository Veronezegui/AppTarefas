import React from 'react';
import { Button, Container, Content, 
    ButtonText, Title, CardList,
Search, Procurar, Header} from './styles';
import { Entypo } from '@expo/vector-icons'; 

export function ListaTarefas() {
    return (
        <Container>
            <Header>
            <Search
                placeholder='Digite sua tarefa...'
            ></Search>
            <Procurar>
                <ButtonText>
                    Procurar
                </ButtonText>
            </Procurar>
            </Header>
            <Content>
                <Button>
                    <Entypo name="add-to-list" size={30} color="white" />
                </Button>
            </Content>
            <CardList />
        </Container>
    )
}