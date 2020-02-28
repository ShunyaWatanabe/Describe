import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors, spacing, font } from 'src/styles';

interface Props {
  text: string;
  onPress: (event: any) => void;
  uiType?: 'fill' | 'outline'; // add text
  size?: 'regular'; // add large and small
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.PRIMARY1,
    padding: spacing.spacing2,
    borderRadius: 50,
    minWidth: 200,
    margin: 30,
  },
  buttonOutline: {
    alignItems: 'center',
    borderColor: colors.PRIMARY1,
    borderWidth: 2,
    borderStyle: 'solid',
    padding: spacing.spacing2,
    borderRadius: 50,
    minWidth: 200,
    margin: 30,
  },
  textBlack: {
    fontFamily: font.fontFamily,
    fontSize: font.size4,
    color: colors.BLACK,
  },
  textWhite: {
    fontFamily: font.fontFamily,
    fontSize: font.size4,
    color: colors.WHITE,
  },
});

export default function Button(props: Props) {
  const { onPress, text } = props;
  let buttonStyle;
  let textStyle;
  switch (props.uiType) {
    case 'fill':
      buttonStyle = styles.button;
      textStyle = styles.textWhite;
      break;
    case 'outline':
      buttonStyle = styles.buttonOutline;
      textStyle = styles.textBlack;
      break;
    default:
      buttonStyle = styles.button;
      textStyle = styles.textWhite;
      break;
  }
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  uiType: 'fill',
  size: 'regular',
};
