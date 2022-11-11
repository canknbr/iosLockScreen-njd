import { Text } from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
const SwipeUpToOpen = ({ text }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withRepeat(
            withSequence(
              withTiming(-10, { duration: 300 }),
              withDelay(1000, withTiming(0, { duration: 3000 })),
              withTiming(-10)
            ),
            -1
          ),
        },
      ],
      opacity: withRepeat(
        withSequence(
          withDelay(1000, withTiming(0)),
          withDelay(3000, withTiming(1))
        ),
        -1
      ),
    };
  });
  return (
    <Animated.Text
      style={[
        {
          fontWeight: '600',
          color: 'white',
          alignSelf: 'flex-end',
          letterSpacing: 0.2,
        },
        animatedStyle,
      ]}
    >
      {text}
    </Animated.Text>
  );
};

export default SwipeUpToOpen;
