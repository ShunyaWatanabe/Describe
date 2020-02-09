import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Button from 'src/components/Button';
import styles from 'src/styles';
import Props from 'src/interfaces/Props';
import { Audio } from 'expo-av';

const alarmClock = require('assets/sounds/alarmClock.wav');

Audio.setAudioModeAsync({ playsInSilentModeIOS: true } as any);
const soundObject = new Audio.Sound();

export default function Screen(props: Props) {
  const {
    navigation: { navigate },
  } = props;

  useEffect(() => {
    (async () => {
      try {
        await soundObject.loadAsync(alarmClock);
        await soundObject.playAsync();
      } catch (error) {
        // An error occurred!
        // console.log(error);
      }
    })();
    return () => {
      soundObject.stopAsync().then(() => soundObject.unloadAsync());
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Which team won the round?</Text>
      <View style={styles.row}>
        <Button text="TEAM 1" onPress={() => navigate('GameScore', {})} />
        <Button text="TEAM 2" onPress={() => navigate('GameScore', {})} />
      </View>
    </View>
  );
}

Screen.navigationOptions = {
  // title: 'Main',
  headerShown: false,
};
