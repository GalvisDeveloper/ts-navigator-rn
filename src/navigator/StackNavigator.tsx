import { createStackNavigator } from '@react-navigation/stack';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import React from 'react';
import PersonScreen from '../screens/PersonScreen';

export type RootStackParams = {
	'Page 1': undefined;
	'Page 2': undefined;
	'Page 3': undefined;
	'Person': { id: number; name: string };
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					// android
					elevation: 0,
					// ios
					shadowColor: 'transparent',
				},
				cardStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			<Stack.Screen name='Page 1' options={{ title: 'Initial' }} component={Page1Screen} />
			<Stack.Screen name='Page 2' options={{ title: 'Middle' }} component={Page2Screen} />
			<Stack.Screen name='Page 3' options={{ title: 'End' }} component={Page3Screen} />
			<Stack.Screen name='Person' component={PersonScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
