import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentPhrase } from 'src/redux/actions';
import { View, StatusBar } from 'react-native';
import Card from 'src/components/Card';
import styles from 'src/styles';
import Props from 'src/interfaces/Props';

function Screen(props: Props) {
  const {
    // navigation: { navigate },
    currentPhrase,
  } = props;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Card
        text={currentPhrase}
        onPress={() => props.changeCurrentPhrase(currentPhrase)}
      />
    </View>
  );
}

function mapStateToProps(state: any) {
  return {
    currentPhrase: state.currentPhrase,
  };
}

const mapDispatchToProps = { changeCurrentPhrase };

export default connect(mapStateToProps, mapDispatchToProps)(Screen);

Screen.navigationOptions = {
  // title: 'Main',
  headerShown: false,
};
