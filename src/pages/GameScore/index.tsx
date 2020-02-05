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
      <View style={styles.row}>
        <View style={styles.container}>
          <Text style={styles.h2}>Team 1</Text>
          <Text style={[styles.h2, { margin: 0 }]}>3</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.h2}>Team 2</Text>
          <Text style={[styles.h2, { margin: 0 }]}>7</Text>
        </View>
      </View>
      <Button text="NEXT ROUND" onPress={() => navigate('GameResult', {})} />
    </View>
  );
}

Screen.navigationOptions = {
  // title: 'Main',
  headerShown: false,
};
