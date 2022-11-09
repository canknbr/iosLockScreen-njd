import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
export const NOTIFICATION_ITEM_HEIGHT = 80;
const NotificationItem = ({ data, index }) => {
  return (
    <View style={styles.container}>
      <Image source={data.icon} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {data.subtitle}
        </Text>
      </View>
      <Text style={styles.time}>{data.createdAt} ago</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: NOTIFICATION_ITEM_HEIGHT,
    backgroundColor: '#00000075',
    margin: 5,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 10,
  },
  time: {
    color: 'lightgrey',
    fontSize: 12,
    position: 'absolute',
    right: 10,
    top: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  subTitle: {
    color: 'white',
    lineHeight: 18,
    letterSpacing: 0.2,
  },
});
export default NotificationItem;
