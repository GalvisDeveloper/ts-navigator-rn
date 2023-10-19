import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';

const Page3Screen = () => {
	const navigator = useNavigation<any>();

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.text}>Pagina3Screen</Text>

			<Button title='Go Back' onPress={() => navigator.pop()} />
			<Button title='Reset' onPress={() => navigator.popToTop()} />
		</View>
	);
};

export default Page3Screen;
