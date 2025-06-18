import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lista from './telas/Lista';
import Login from './telas/Login';
import Principal from './telas/Principal';
import Suporte from './telas/Suporte';
import Marcar from './telas/Marcar';

const Stack = createStackNavigator();

function ListaTelas() {
  return (
    <Stack.Navigator initialRouteName='Suporte'>
      <Stack.Screen name="Login" component={Login} options={{
        headerShown:false
      }} />
      <Stack.Screen name="Principal" component={Principal} />
      <Stack.Screen name="Lista" component={Lista} options={{
        headerTitle: "Registro de Marcações",
        headerTintColor:'#40c188',
      }} />
      <Stack.Screen name="Suporte" component={Suporte} options={{
        headerTitle: "Suporte e Ajuda",
        headerTintColor:'#40c188',
      }}/>
      <Stack.Screen name="Marcar" component={Marcar} options={{
        headerTitle:'Marcação de Ponto',
        headerTintColor:'#40c188'
      }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ListaTelas />
    </NavigationContainer>
  );
}
