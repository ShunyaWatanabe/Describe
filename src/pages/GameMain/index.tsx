import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { connect } from 'react-redux';
import actions from 'src/redux/actions';
import { View, StatusBar } from 'react-native';
import Card from 'src/components/Card';
import styles from 'src/styles';
import Props from 'src/interfaces/Props';
import { Audio } from 'expo-av';
import withBackHandler from 'src/wrappers/withBackHandler';

const timer1 = require('assets/sounds/timer1.wav');

const playSound = async (source: number) => {
  try {
    const { sound: soundObject, status } = await Audio.Sound.createAsync(
      source,
      { shouldPlay: true, isLooping: true },
    );
    return { soundObject, status };
  } catch (error) {
    return { error };
  }
};

const setLoop = async (
  {
    soundObject,
    rate,
    numLoops,
  }: {
    soundObject: Audio.Sound;
    rate: number;
    numLoops: number;
  },
  callback: Function,
) => {
  if (numLoops <= 0) {
    console.log('unload timer');
    await soundObject.unloadAsync();
    callback();
  } else {
    setTimeout(async () => {
      const newRate = rate + 0.2;
      await soundObject.setRateAsync(newRate, true);
      setLoop({ soundObject, rate: newRate, numLoops: numLoops - 1 }, callback);
    }, 10 * 1000);
  }
};

export function Screen(props: Props) {
  const {
    navigation: { navigate },
    currentPhrase,
    changeCurrentPhrase,
    // points,
  } = props;

  useFocusEffect(
    React.useCallback(() => {
      changeCurrentPhrase(currentPhrase);
      (async () => {
        const { soundObject, status } = await playSound(timer1);
        if (status && soundObject && status.isLoaded && status.isPlaying) {
          setLoop({ soundObject, rate: status.rate, numLoops: 1 }, () => {
            navigate('GameDecision', {});
          });
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

export function mapStateToProps(state: any) {
  return {
    currentPhrase: state.currentPhrase,
    points: state.points,
  };
}

const mapDispatchToProps = {
  changeCurrentPhrase: actions.changeCurrentPhrase,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withBackHandler(Screen));

Screen.navigationOptions = {
  // title: 'Main',
  headerShown: false,
};
