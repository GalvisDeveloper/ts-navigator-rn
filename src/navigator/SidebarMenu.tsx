import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import SettingsScreen from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import BottomTabs from './BottomTabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type RootStackParams = {
	'Page 1': undefined;
	'Page 2': undefined;
};

const Drawer = createDrawerNavigator();

const SidebarMenu = () => {
	const { width } = useWindowDimensions();

	return (
		<Drawer.Navigator
			screenOptions={{
				// headerShown: false,
				drawerType: width >= 768 ? 'permanent' : 'front',
				drawerStyle: {
					width: width > 768 ? 150 : 200,
				},
			}}
			drawerContent={(props) => <InternalMenu {...props} />}
		>
			<Drawer.Screen name='Tabs' options={{ title: 'Navigation App' }} component={BottomTabs} />
			<Drawer.Screen name='SettingsScreen' options={{ title: 'Settings' }} component={SettingsScreen} />
		</Drawer.Navigator>
	);
};

export default SidebarMenu;

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {
	return (
		<DrawerContentScrollView>
			{/* Avatar */}
			<View>
				<Image
					source={{
						uri: 'https://cdn.icon-icons.com/icons2/2630/PNG/512/avatar_man_boy_people_black_race_african_icon_159091.png',
						height: 100,
						width: 100,
					}}
					style={styles.avatar}
				/>
			</View>

			{/* Menu Options */}
			<View style={styles.menuCt}>
				<TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
					<Text style={styles.menuText}>
						<Icon name='pivot-table-chart' style={styles.icon} /> Navegation
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
					<Text style={styles.menuText}>
						<Icon name='settings' style={styles.icon} /> Settings
					</Text>
				</TouchableOpacity>
			</View>
		</DrawerContentScrollView>
	);
};
