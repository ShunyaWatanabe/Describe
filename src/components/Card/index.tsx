import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors, font } from 'src/styles';

interface Props {
  text: string;
  onPress: (event: any) => void;
  uiType?: 'fill' | 'outline'; // add text
  size?: 'regular'; // add large and small
}

const styles = StyleSheet.create({
  card: {
    height: 230,
    width: 420,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    shadowRadius: 4,
    shadowColor: colors.BLACK,
    shadowOffset: { height: 0, width: 4 },
    borderRadius: 10,
  },
  text: {
    fontSize: font.size6,
  },
});

export default function Card(props: Props) {
  const { onPress, text } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

Card.defaultProps = {
  uiType: 'fill',
  size: 'regular',
};
