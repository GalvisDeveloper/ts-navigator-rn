import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import {LogBox, Platform, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, styles} from '../theme/appTheme';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

LogBox.ignoreLogs(['Sending']);

enum RouteTypes {
  Chat = 'Chat',
  Contacts = 'Contacts',
  Albums = 'Albums',
}

const ROUTES = {
  [RouteTypes.Chat]: <Icon name="chat" style={styles.icon} />,
  [RouteTypes.Contacts]: <Icon name="contacts" style={styles.icon} />,
  [RouteTypes.Albums]: <Icon name="collections" style={styles.icon} />,
};

type TabBarIconProps = {
  focused: boolean;
  color: string;
};

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return Platform.OS === 'ios' ? <TopTabsIOS /> : <TopTabsAndroid />;
};

const TabIcons = (
  route: RouteProp<ParamListBase, string>,
  props: TabBarIconProps,
) => {
  let iconName: RouteTypes = (route.name as RouteTypes) || '';
  return <Text style={{color: props.color}}>{ROUTES[iconName]}</Text>;
};

const TopTabsAndroid = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.gray,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          elevation: 0,
        },
        tabBarIcon: props => {
          return TabIcons(route, props);
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};

const TopTabsIOS = () => {
  const {top: paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop}}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarPressColor: colors.gray,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
        },
        tabBarIcon: props => {
          return TabIcons(route, props);
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};

export default TopTabs;
