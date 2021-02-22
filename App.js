import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import store from '@redux/store';

// Import views
import {Home, Users, UserDetails} from 'components/views';
import {StatusBar} from 'react-native';

const Drawer = createDrawerNavigator();
const UsersStack = createStackNavigator();

const UserStackScreen = () => {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name="UserList" component={Users} />
      <UsersStack.Screen name="UserDetails" component={UserDetails} />
    </UsersStack.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="default" />
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Users" component={UserStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
