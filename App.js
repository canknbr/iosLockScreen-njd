import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from './src/components/Header';
import bg from './assets/images/wallpaper.webp';
import NotificationsList from './src/components/NotificationsList';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <ImageBackground source={bg} style={styles.container}>
      <NotificationsList ListHeaderComponent={() => <Header />} />
      <View style={styles.footer}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="flashlight" size={24} color="white" />
        </View>
        <View style={styles.icon}>
          <Ionicons name="ios-camera" size={24} color="white" />
        </View>
      </View>
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
    height: 100,
    marginTop: 'auto',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  icon: {
    backgroundColor: '#00000050',
    width: 60,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    overflow: 'hidden',
  },
});
