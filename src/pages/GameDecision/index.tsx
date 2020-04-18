import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Button from 'src/components/Button';
import styles from 'src/styles';
import Props from 'src/interfaces/Props';
import { Audio } from 'expo-av';
import actions from 'src/redux/actions';
import withBackHandler from 'src/wrappers/withBackHandler';

const alarmClock = require('assets/sounds/alarm1.wav');

Audio.setAudioModeAsync({ playsInSilentModeIOS: true } as any);

export function Screen(props: Props) {
  const {
    navigation: { navigate },
    increaseTeamPoint,
    points: [point1, point2],
  } = props;
  useFocusEffect(
    React.useCallback(() => {
      let soundObject: Audio.Sound;
      (async () => {
        try {
          const { sound } = await Audio.Sound.createAsync(alarmClock, {
            shouldPlay: true,
          });
          soundObject = sound;
          soundObject.setOnPlaybackStatusUpdate(async playbackStatus => {
            if (playbackStatus.isLoaded && playbackStatus.didJustFinish) {
              soundObject.unloadAsync();
            }
          });
        } catch (error) {
          // An error occurred!
          // console.error(error);
        }
      })();
      return () => {
        (async () => {
          if (soundObject) {
            const status = await soundObject.getStatusAsync();
            if (status.isLoaded) {
              soundObject.unloadAsync();
            }
          }
        })();
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

export const mapStateToProps = (state: any) => {
  return {
    currentPhrase: state.currentPhrase,
    points: state.points,
  };
};

const mapDispatchToProps = {
  increaseTeamPoint: actions.increaseTeamPoint,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withBackHandler(Screen));
