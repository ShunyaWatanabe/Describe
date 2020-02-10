import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Button from 'src/components/Button';
import styles from 'src/styles';
import Props from 'src/interfaces/Props';
import { Audio } from 'expo-av';
import actions from 'src/redux/actions';

const alarmClock = require('assets/sounds/alarmClock.wav');

Audio.setAudioModeAsync({ playsInSilentModeIOS: true } as any);
const soundObject = new Audio.Sound();

function Screen(props: Props) {
  const {
    navigation: { navigate },
    increaseTeamPoint,
    points: [point1, point2],
  } = props;

  useFocusEffect(
    React.useCallback(() => {
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
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Which team won the round?</Text>
      <View style={styles.row}>
        <Button
          text="TEAM 1"
          onPress={() => {
            increaseTeamPoint(0);
            navigate(point1 >= 6 ? 'GameResult' : 'GameScore', {});
          }}
        />
        <Button
          text="TEAM 2"
          onPress={() => {
            increaseTeamPoint(1);
            navigate(point2 >= 6 ? 'GameResult' : 'GameScore', {});
          }}
        />
      </View>
    </View>
  );
}

Screen.navigationOptions = {
  // title: 'Main',
  headerShown: false,
};

const mapStateToProps = (state: any) => {
  return {
    currentPhrase: state.currentPhrase,
    points: state.points,
  };
};

const mapDispatchToProps = {
  increaseTeamPoint: actions.increaseTeamPoint,
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
