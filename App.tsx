import React from 'react';
import { Provider } from 'react-redux';
import { Home, GameMain, GameResult, GameScore, GameDecision } from 'src/pages';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './src/redux/store';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GameMain" component={GameMain} />
        <Stack.Screen name="GameResult" component={GameResult} />
        <Stack.Screen name="GameScore" component={GameScore} />
        <Stack.Screen name="GameDecision" component={GameDecision} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
