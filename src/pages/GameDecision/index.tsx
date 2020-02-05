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
