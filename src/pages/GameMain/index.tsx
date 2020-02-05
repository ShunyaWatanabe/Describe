import React from 'react';
import { View } from 'react-native';
import Card from 'src/components/Card';
import styles from 'src/styles';
import Props from 'src/interfaces/Props';

export default function Screen(props: Props) {
  const {
    navigation: { navigate },
  } = props;

  return (
    <View style={styles.container}>
      <Card text="PLATYPUS" onPress={() => navigate('GameDecision', {})} />
    </View>
  );
}

Screen.navigationOptions = {
  // title: 'Main',
  headerShown: false,
};
