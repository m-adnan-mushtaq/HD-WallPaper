import {View, Text, Animated, StyleSheet, Easing} from 'react-native';
import React, {useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../theme';
import FastImage from 'react-native-fast-image';

type Props = {
  url: string;
  borderRadius: number;
  dimensions: {
    width: number | string;
    height: number | string;
  };
};
const LazyImage = ({borderRadius, dimensions, url}: Props) => {
  const [toggleFadeIn, setToggleFadeIn] = useState(false);
  const opacityValue = useRef(new Animated.Value(0)).current;
  return (
    <React.Fragment>
      {!toggleFadeIn && (
        <LinearGradient
          style={[
            styles.placeholder,
            {
              ...(dimensions as any),
              borderRadius,
            },
          ]}
          colors={[colors.DARK_SECONDARY_COLOR, colors.DARK_GREY_COLOR]}
          useAngle
          angle={9}
        />
      )}
      <Animated.View style={{opacity: opacityValue}}>
        <FastImage
          onLoad={() => {
            if (toggleFadeIn) return;
            Animated.timing(opacityValue, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true,
              easing: Easing.in(Easing.ease),
            }).start(() => {
              setToggleFadeIn(true);
            });
          }}
          style={{
            ...(dimensions as any),
            borderRadius,
          }}
          source={{
            uri: url,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </Animated.View>
    </React.Fragment>
  );
};

export default LazyImage;

const styles = StyleSheet.create({
  placeholder: {position: 'absolute', left: 0, right: 0},
});
