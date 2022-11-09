import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import bg from './assets/images/wallpaper.webp';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
export default function App() {
  const [date, setDate] = useState(dayjs());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <ImageBackground source={bg} style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="ios-lock-closed" size={20} color="white" />
        <Text style={styles.date}>{date.format('dddd, DD MMMM')}</Text>
        <Text style={styles.time}>{date.format('hh:mm')}</Text>
      </View>
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
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
  },
  date: {
    color: '#c3fffe',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  time: {
    fontSize: 82,
    fontWeight: 'bold',
    color: '#c3fffe',
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
