import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Button from 'src/components/Button';
import Props from 'src/interfaces/Props';
import styles from 'src/styles';

export default function Screen(props: Props) {
  const {
    navigation: { navigate },
  } = props;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.h1}>Describe</Text>
        <Button text="START" onPress={() => navigate('GameMain', {})} />
      </View>
    </View>
  );
}

Screen.navigationOptions = {
  // title: 'Home',
  headerShown: false,
};
