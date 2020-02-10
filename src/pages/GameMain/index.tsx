import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import actions from 'src/redux/actions';
import { View, StatusBar } from 'react-native';
import Card from 'src/components/Card';
import styles from 'src/styles';
import Props from 'src/interfaces/Props';
import { Audio } from 'expo-av';

const clock = require('assets/sounds/clock.wav');

Audio.setAudioModeAsync({ playsInSilentModeIOS: true } as any);
const soundObject = new Audio.Sound();

function Screen(props: Props) {
  const {
    navigation: { navigate },
    currentPhrase,
    changeCurrentPhrase,
  } = props;

  useFocusEffect(
    React.useCallback(() => {
      changeCurrentPhrase(currentPhrase);
      let interval: any;
      let rate: number = 1;
      let times: number = 0;
      (async () => {
        try {
          await soundObject.loadAsync(clock, {
            isLooping: true,
          });
          await soundObject.playAsync();
          interval = setInterval(async () => {
            times += 1;
            if (times < 3) {
              rate += 0.5;
              soundObject.setRateAsync(rate, true);
            } else {
              await soundObject.stopAsync();
              await soundObject.unloadAsync();
              clearInterval(interval);
              navigate('GameDecision', {});
            }
          }, 5 * 1000);
        } catch (error) {
          // An error occurred!
          // console.log(error);
        }
      })();
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

function mapStateToProps(state: any) {
  return {
    currentPhrase: state.currentPhrase,
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
