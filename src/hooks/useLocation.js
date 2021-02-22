import {useState, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

function useLocation() {
  const [hasLocationPermission, setLocationPermission] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    const requestLocationPermission = async () => {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (hasPermission) {
        setLocationPermission(true);
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'HeruApp',
            message: 'HeruApp need access to your location',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setLocationPermission(true);
        } else {
          setLocationPermission(false);
        }
      }
    };

    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (hasLocationPermission) {
      const getLocation = () => {
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            setLocation(position);
          },
          (error) => console.log(error),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
      };

      getLocation();
    }
  }, [hasLocationPermission]);

  return {hasLocationPermission, location};
}

export default useLocation;
