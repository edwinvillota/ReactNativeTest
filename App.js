import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import AppReducers from 'reducers';
import SplashScreen from 'react-native-splash-screen';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(AppReducers, applyMiddleware(sagaMiddleware));

// Import views
import {Home, Users, UserDetails} from 'components/views';
import {StatusBar} from 'react-native';

const Drawer = createDrawerNavigator();

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
          <Drawer.Screen name="Users" component={Users} />
          <Drawer.Screen name="UserDetails" component={UserDetails} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
