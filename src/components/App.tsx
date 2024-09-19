import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomHeader from './CustomHeader/CustomHeader';
import Timer from './Timer/Timer';

const colors: string[] = ['#F7DC6F', '#A2D9CE', '#D7BDE2'];

const App = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [currentSelectedTimeIndex, setCurrentSelectedTimeIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval: any = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime(time - 1);
      }, 10);
    } else {
      clearInterval(interval);
    }

    if (time === 0) {
      setIsActive(false);
      setTime(
        currentSelectedTimeIndex === 0
          ? 25 * 60
          : currentSelectedTimeIndex === 1
          ? 5 * 60
          : 15 * 60,
      );
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, time]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors[currentSelectedTimeIndex] },
      ]}>
      <View style={styles.principalView}>
        <Text style={styles.title}>Pomodoro</Text>
        <CustomHeader
          currentSelectedTimeIndex={currentSelectedTimeIndex}
          setCurrentSelectedTimeIndex={setCurrentSelectedTimeIndex}
          setTime={setTime}
        />
        <Timer time={time} />
        <TouchableOpacity
          style={styles.buttonStartStop}
          onPress={() => handleStartStop()}>
          <Text style={styles.buttonStartStopText}>
            {isActive ? 'STOP' : 'START'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  principalView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  buttonStartStop: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonStartStopText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
