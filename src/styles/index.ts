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
    paddingHorizontal: 50,
  },
  h1: {
    fontFamily: font.fontFamily,
    textAlign: 'center',
    fontSize: font.size7,
    margin: 40,
  },
  h2: {
    fontFamily: font.fontFamily,
    textAlign: 'center',
    fontSize: font.size5,
    margin: 30,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  back: {
    fontFamily: font.fontFamilyThin,
    textDecorationLine: 'underline',
    position: 'absolute',
    left: 0,
    top: 0,
    margin: 30,
    marginLeft: 50,
  },
});

export default styles;

export { colors, spacing, font };
