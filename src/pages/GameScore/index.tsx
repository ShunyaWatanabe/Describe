import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Button from 'src/components/Button';
import styles from 'src/styles';
import Props from 'src/interfaces/Props';
import withBackHandler from 'src/wrappers/withBackHandler';

export function Screen(props: Props) {
  const {
    navigation: { navigate },
    points: [point1, point2],
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.container}>
          <Text style={styles.h2}>Team 1</Text>
          <Text style={[styles.h2, { margin: 0 }]}>{point1}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.h2}>Team 2</Text>
          <Text style={[styles.h2, { margin: 0 }]}>{point2}</Text>
        </View>
      </View>
      <Button text="NEXT ROUND" onPress={() => navigate('GameMain', {})} />
    </View>
  );
}

Screen.navigationOptions = {
  // title: 'Main',
  headerShown: false,
};

export function mapStateToProps(state: any) {
  return {
    points: state.points,
  };
}

export default connect(mapStateToProps)(withBackHandler(Screen));
