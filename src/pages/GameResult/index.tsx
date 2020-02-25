import React from 'react';
import { connect } from 'react-redux';
import actions from 'src/redux/actions';
import { View, Text } from 'react-native';
import Button from 'src/components/Button';
import styles from 'src/styles';
import Props from 'src/interfaces/Props';

export function Screen(props: Props) {
  const {
    navigation: { navigate },
    points: [point1, point2],
    resetPoints,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.h2}>Team {point1 > point2 ? '1' : '2'} won!</Text>
      <View style={styles.row}>
        <Button
          text="RETURN HOME"
          onPress={() => navigate('Home', {})}
          uiType="outline"
        />
        <Button
          text="PLAY AGAIN"
          onPress={() => {
            resetPoints();
            navigate('GameMain', {});
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

export function mapStateToProps(state: any) {
  return {
    points: state.points,
  };
}

const mapDispatchToProps = {
  resetPoints: actions.resetPoints,
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
