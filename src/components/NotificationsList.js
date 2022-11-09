import { FlatList, useWindowDimensions } from 'react-native';
import React from 'react';
import Notifications from '../../assets/data/notifications';
import NotificationItem from './NotificationItem';

const NotificationsList = ({ ...flatListProps }) => {
  const { width } = useWindowDimensions();
  return (
    <FlatList
      data={Notifications}
      renderItem={({ item, index }) => (
        <NotificationItem data={item} index={index} />
      )}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      {...flatListProps}
    />
  );
};

export default NotificationsList;
