import {useState, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';

function useLocation() {
  const [location, setLocation] = useState();

  useEffect(() => {
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
  }, []);

  return {location};
}

export default useLocation;
