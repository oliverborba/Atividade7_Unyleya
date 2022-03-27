import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Editar from './src/Editar';
import Cadastro from './src/Cadastro';
import { Button, Icon } from 'react-native-elements';

const Stack = createNativeStackNavigator();

export default App => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => {
            return {
              title: "Coleção de Jogos",
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Cadastro')}
                  type='clear'
                  icon={<Icon name="add" size={25} color='white' />}
                />
              )
            }
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: "Novo Jogo"
          }}
        />
        <Stack.Screen
          name='Editar'
          component={Editar}
          options={{
            title: "Ajuste as Informações"
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTittleStyle: {
    fontWeight: 'bold'
  }
}