import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from './src/components/Header';
import SwipeUpToOpen from './src/components/SwipeUpToOpen';
import bg from './assets/images/wallpaper.webp';
import NotificationsList from './src/components/NotificationsList';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated, {
  SlideInDown,
  SlideInUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
export default function App() {
  const footerVisibility = useSharedValue(1);
  const footerAnimatedStyle = useAnimatedStyle(() => {
    return {
      marginTop: interpolate(footerVisibility.value, [0, 1], [-85, 0]),
      opacity: footerVisibility.value,
    };
  });
  return (
    <ImageBackground source={bg} style={styles.container}>
      <NotificationsList
        footerVisibility={footerVisibility}
        ListHeaderComponent={() => <Header />}
      />
      <Animated.View
        entering={SlideInDown}
        style={[styles.footer, footerAnimatedStyle]}
      >
        <View style={styles.icon}>
          <MaterialCommunityIcons name="flashlight" size={24} color="white" />
        </View>
        <SwipeUpToOpen text={'swipe up to open'} />
        <View style={styles.icon}>
          <Ionicons name="ios-camera" size={24} color="white" />
        </View>
      </Animated.View>
      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 75,
    marginTop: 'auto',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 10,
    overflow: 'hidden',
  },
  icon: {
    backgroundColor: '#00000050',
    width: 50,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    overflow: 'hidden',
  },
});
