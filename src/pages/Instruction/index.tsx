import React, { useState } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Props from 'src/interfaces/Props';
import styles from 'src/styles';
import instructions from 'assets/images/instructions';

const [IMAGE_WIDTH, IMAGE_HEIGHT] = [400, 240];

export const renderItem = ({ item }: { item: any }) => {
  return (
    <Image source={item} style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }} />
  );
};

export const pagination = (activeSlide: number) => {
  return (
    <Pagination
      dotsLength={instructions.length}
      activeDotIndex={activeSlide}
      dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );
};

export default function Screen(props: Props) {
  const {
    navigation: { goBack },
  } = props;
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={styles.back} onPress={() => goBack()}>
        Back
      </Text>
      <View style={(styles.container, { marginTop: 50 })}>
        <Carousel
          data={instructions}
          renderItem={renderItem}
          onSnapToItem={index => setActiveSlide(index)}
          sliderWidth={IMAGE_WIDTH}
          itemWidth={IMAGE_WIDTH}
          removeClippedSubviews={false}
        />
        {/* disabling removeClippedSubviews fixes a bug
          which is the first item not showing */}
        {pagination(activeSlide)}
      </View>
    </View>
  );
}

Screen.navigationOptions = {
  // title: 'Home',
  headerShown: false,
};
