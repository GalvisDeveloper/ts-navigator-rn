import 'react-native-gesture-handler';
import React from 'react';
import SidebarMenu from './src/navigator/SidebarMenu';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';

export const App = () => {
	return (
		<NavigationContainer>
			<AuthProvider>
				<SidebarMenu />
			</AuthProvider>
		</NavigationContainer>
	);
};
