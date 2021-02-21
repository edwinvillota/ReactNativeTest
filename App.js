import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';

// Import views
import {Home, Users, UserDetails} from 'components/views';
import {StatusBar} from 'react-native';

const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="default" />
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Users" component={Users} />
        <Drawer.Screen name="UserDetails" component={UserDetails} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
