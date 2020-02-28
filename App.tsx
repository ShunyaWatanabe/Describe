import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Home, GameMain, GameResult, GameScore, GameDecision } from 'src/pages';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import store from './src/redux/store';

const PTSansNarrowBold = require('./assets/fonts/PTSansNarrow-Bold.ttf');
const PTSansNarrow = require('./assets/fonts/PTSansNarrow-Regular.ttf');

const fetchFonts = async () => {
  return Font.loadAsync({
    PTSansNarrow,
    PTSansNarrowBold,
  });
};

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
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
