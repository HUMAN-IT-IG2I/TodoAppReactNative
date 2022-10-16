import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, TouchableOpacity} from 'react-native';

export const FloatingActionButton = () => {
  return (
    <TouchableOpacity style={styles.fab}>
      <MaterialIcons name="add" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});
