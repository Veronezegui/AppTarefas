import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../pages/Home'
import { ListaTarefas } from '../pages/ListaTarefas'

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator>
            <Screen 
                name='Home'
                component={Home}
            />
            <Screen 
                name='ListaTarefas'
                component={ListaTarefas}
            />
        </Navigator>
    )
}