import React from 'react';
import { Button, Container, Content, 
    ButtonText, Title, CardList,
Search } from './styles';

export function ListaTarefas() {
    return (
        <Container>
            <CardList>
                <Search
                    placeholder='Digite sua tarefa...'
                ></Search>
            </CardList>
            <Content>
                <Button>
                    <ButtonText>
                        Cadastrar tarefa
                    </ButtonText>
                </Button>
                <Button>
                    <ButtonText>
                        Excluir tarefa
                    </ButtonText>
                </Button>
            </Content>
            <Title>
                Suas Tarefas
            </Title>
            <CardList />
        </Container>
    )
}