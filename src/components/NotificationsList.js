import { FlatList, useWindowDimensions } from 'react-native';
import React from 'react';
import Notifications from '../../assets/data/notifications';
import NotificationItem from './NotificationItem';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
const NotificationsList = ({ footerVisibility, ...flatListProps }) => {
  const { height } = useWindowDimensions();
  const scrollY = useSharedValue(1);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const scrollOffset = event.contentOffset.y;
      if (scrollOffset < 10) {
        footerVisibility.value = withTiming(1, { duration: 200 });
      } else {
        footerVisibility.value = withTiming(0, { duration: 200 });
      }
    },
    onBeginDrag: event => {
      if (scrollY.value < 1) {
        scrollY.value = withTiming(1, { duration: 1200 });
      }
    },
    onEndDrag: event => {
      if (event.contentOffset.y < 0) {
        scrollY.value = withTiming(0, { duration: 1200 });
      }
    },
  });
  return (
    <Animated.FlatList
      data={Notifications}
      renderItem={({ item, index }) => (
        <NotificationItem data={item} index={index} scrollY={scrollY} />
      )}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      {...flatListProps}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    />
  );
};

export default NotificationsList;
