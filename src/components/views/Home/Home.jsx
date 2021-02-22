import React, {useState, useRef, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useLocation} from 'hooks';
import {Theme} from 'styles';
import Styles from './styles';
import {View, Text, ActivityIndicator} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const Home = () => {
  const {hasLocationPermission, location} = useLocation();
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
      <Text style={Styles.date}>
        {`Date: ${new Date().toLocaleDateString()}`}
      </Text>
      <Text style={Styles.time}>{`Time: ${time}`}</Text>
      {hasLocationPermission && location ? (
        <MapView
          style={Styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      ) : (
        <ActivityIndicator size="small" color="#65D9E4" />
      )}
      {!hasLocationPermission && (
        <Text>Heru app needs access to your location</Text>
      )}
    </View>
  );
};

export default Home;
