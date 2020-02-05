import React from 'react';
import { View, Text } from 'react-native';
import Button from 'src/components/Button';
import styles from 'src/styles';
import Props from 'src/interfaces/Props';

export default function Screen(props: Props) {
  const {
    navigation: { navigate },
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Team 1 won!</Text>
      <View style={styles.row}>
        <Button
          text="RETURN HOME"
          onPress={() => navigate('Home', {})}
          uiType="outline"
        />
        <Button text="PLAY AGAIN" onPress={() => navigate('GameMain', {})} />
      </View>
    </View>
  );
}

Screen.navigationOptions = {
  // title: 'Main',
  headerShown: false,
};
