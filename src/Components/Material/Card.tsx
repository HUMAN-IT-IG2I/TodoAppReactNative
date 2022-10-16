import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';

interface CardProps {
  children: ReactNode;
}

export const Card = ({children}: CardProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: 'white',
    margin: 8,
    padding: 4,
    shadowRadius: 10,
    shadowOpacity: 0.5,
    shadowColor: 'black',
  },
});
