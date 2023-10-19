import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

export type RootStackParams = {
	'Page 1': undefined;
	'Page 2': undefined;
};

const Drawer = createDrawerNavigator();

const SidebarMenuBasic = () => {
	const { height, width } = useWindowDimensions();

	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
				drawerType: width >= 768 ? 'permanent' : 'front',
				drawerStyle: {
					width: width > 768 ? 150 : 200,
				},
			}}
		>
			<Drawer.Screen name='StackNavigator' options={{ title: 'Home' }} component={StackNavigator} />
			<Drawer.Screen name='SettingsScreen' options={{ title: 'Settings' }} component={SettingsScreen} />
		</Drawer.Navigator>
	);
};

export default SidebarMenuBasic;
