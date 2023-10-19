import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';

const Page2Screen = () => {
	const navigator = useNavigation<any>();

	useEffect(() => {
		navigator.setOptions({
			title: 'Middle Page',
			// ios
			headerBackTitle: 'Back',
		});
	}, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Pagina2Screen</Text>

			<Button title='Go to Page 3' onPress={() => navigator.navigate('Page 3')} />
		</View>
	);
};

export default Page2Screen;
