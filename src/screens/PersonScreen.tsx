import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'Person'> {}

// interface RouteParams {
// 	id: number;
// 	name: string;
// }

const PersonScreen = ({ route, navigation }: Props) => {
	// const params = route.params as RouteParams;

	const params = route.params;

	const { changeUsername } = useContext(AuthContext);

	useEffect(() => {
		navigation.setOptions({
			title: params.name,
		});
	}, []);

	useEffect(() => {
		changeUsername(params.name);
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>{`Hola ${params.name}`}</Text>

			{/* <Button title='' /> */}
		</View>
	);
};

export default PersonScreen;
