import { StyleSheet } from 'react-native';
import colors from './colors';
import font from './font';
import spacing from './spacing';

const styles = StyleSheet.create({
  container: {
    fontFamily: font.fontFamily,
    flex: 1,
    backgroundColor: colors.GREY6,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  h1: {
    textAlign: 'center',
    fontSize: font.size7,
    margin: 40,
  },
  h2: {
    textAlign: 'center',
    fontSize: font.size5,
    margin: 30,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;

export { colors, spacing, font };
