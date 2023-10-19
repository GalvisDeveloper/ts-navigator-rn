import 'react-native-gesture-handler';
import React from 'react';
import SidebarMenu from './src/navigator/SidebarMenu';
import {NavigationContainer} from '@react-navigation/native';

export const App = () => {
  return (
    <NavigationContainer>
      <SidebarMenu />
      {/* <DrawerNavigator /> */}
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};
