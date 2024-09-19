import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
  time: number;
}

const Timer = ({ time }: Props) => {
  const formattedTime = `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{formattedTime}</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    borderRadius: 15,
    flex: 0.3,
    justifyContent: 'center',
    padding: 15,
  },
  timeText: {
    color: '#333333',
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
