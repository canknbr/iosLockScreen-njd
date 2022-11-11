import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import Animated, { SlideInUp } from 'react-native-reanimated';
const Header = () => {
  const [date, setDate] = useState(dayjs());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <Animated.View entering={SlideInUp} style={styles.header}>
      <Ionicons name="ios-lock-closed" size={20} color="white" />
      <Text style={styles.date}>{date.format('dddd, DD MMMM')}</Text>
      <Text style={styles.time}>{date.format('hh:mm')}</Text>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    marginTop: 10,
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
});
export default Header;
