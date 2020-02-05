import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, GameMain, GameResult, GameScore, GameDecision } from 'src/pages';
import store from './src/redux/store';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  GameMain: { screen: GameMain },
  GameResult: { screen: GameResult },
  GameScore: { screen: GameScore },
  GameDecision: { screen: GameDecision },
});

const Navigation = createAppContainer(MainNavigator);

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
