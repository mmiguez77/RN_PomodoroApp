import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

interface Props {
  currentSelectedTimeIndex: number;
  setCurrentSelectedTimeIndex: (currentSelectedTimeIndex: number) => void;
  setTime: (time: number) => void;
}

const options = ['Pomodoro', 'Short Break', 'Long Break'];

const CustomHeader = ({
  currentSelectedTimeIndex,
  setCurrentSelectedTimeIndex,
  setTime,
}: Props) => {
  const handlePress = (index: number) => {
    const newTime = index === 0 ? 25 * 60 : index === 1 ? 5 * 60 : 15 * 60;
    setCurrentSelectedTimeIndex(index);
    setTime(newTime);
  };

  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.touchableStyle,
            // eslint-disable-next-line react-native/no-inline-styles
            currentSelectedTimeIndex !== index && {
              borderColor: 'transparent',
            },
          ]}>
          <Text style={styles.textTouchable}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  touchableStyle: {
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    marginVertical: 20,
    padding: 5,
    width: '33%',
  },
  textTouchable: {
    color: 'black',
    fontWeight: 'bold',
  },
});
