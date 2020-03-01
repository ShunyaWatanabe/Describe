import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import actions from 'src/redux/actions';
import { View, StatusBar } from 'react-native';
import Card from 'src/components/Card';
import styles from 'src/styles';
import Props from 'src/interfaces/Props';
import { Audio } from 'expo-av';

const timer1 = require('assets/sounds/timer1.wav');
const timer2 = require('assets/sounds/timer2.wav');
const timer3 = require('assets/sounds/timer3.wav');
const timer4 = require('assets/sounds/timer4.wav');

Audio.setAudioModeAsync({ playsInSilentModeIOS: true } as any);

const makeSoundObject = async (source: number) => {
  const soundObject = new Audio.Sound();
  await soundObject.loadAsync(source, {
    isLooping: true,
  });
  return soundObject;
};

export function Screen(props: Props) {
  const {
    navigation: { navigate },
    currentPhrase,
    changeCurrentPhrase,
    points,
  } = props;

  const source = [timer1, timer2, timer3, timer4].map((timer: any) =>
    makeSoundObject(timer),
  );

  useFocusEffect(
    React.useCallback(() => {
      changeCurrentPhrase(currentPhrase);

      Promise.all(source).then((sounds: Array<any>) => {
        let counter = 0;
        sounds[counter].playAsync();
        const id = setInterval(() => {
          sounds[counter].stopAsync();
          counter += 1;
          if (counter <= 3) {
            sounds[counter].playAsync();
          } else {
            clearInterval(id);
            navigate('GameDecision', {});
          }
        }, 1000 * (Math.floor(Math.random() * 10) + 20 + points[0] + points[1]));
      });
      // might need to return clean up, like useEffect
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Card
        text={currentPhrase}
        onPress={() => changeCurrentPhrase(currentPhrase)}
      />
    </View>
  );
}

export function mapStateToProps(state: any) {
  return {
    currentPhrase: state.currentPhrase,
    points: state.points,
  };
}

const mapDispatchToProps = {
  changeCurrentPhrase: actions.changeCurrentPhrase,
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);

Screen.navigationOptions = {
  // title: 'Main',
  headerShown: false,
};
