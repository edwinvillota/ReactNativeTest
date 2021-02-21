import React, {useState, useRef, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Theme} from 'styles';
import Styles from './styles';
import {View, Text} from 'react-native';

const Home = () => {
  const [time, setTime] = useState(new Date().getTime());
  const interval = useRef();

  // Update time only when home view is in focus
  useFocusEffect(
    useCallback(() => {
      interval?.current && clearInterval(interval.current);

      interval.current = setInterval(
        () => setTime(new Date().toLocaleTimeString()),
        1000,
      );

      return () => clearInterval(interval.current);
    }, []),
  );

  return (
    <View style={Styles.view}>
      <Text style={Theme.header}>Welcome</Text>

      <Text
        style={Styles.date}>{`Date: ${new Date().toLocaleDateString()}`}</Text>

      <Text style={Styles.time}>{`Time: ${time}`}</Text>
    </View>
  );
};

export default Home;
