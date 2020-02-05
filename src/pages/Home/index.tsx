import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';
import Button from 'src/components/Button';
import { ScreenOrientation } from 'expo';
import Props from 'src/interfaces/Props';
import styles from 'src/styles';

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_LEFT,
  );
}

export default function Screen(props: Props) {
  const {
    navigation: { navigate },
  } = props;

  useEffect(() => {
    changeScreenOrientation();
  });

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
