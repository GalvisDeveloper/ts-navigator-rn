// import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

const Page1Screen = ({ navigation }: Props) => {
	// * Custom button menu
	// useEffect(() => {
	// 	navigation.setOptions({
	// 		headerLeft: () => (
	// 			<TouchableOpacity
	// 				style={{ marginLeft: 10 }}
	// 				onPress={() => {
	// 					navigation.toggleDrawer();
	// 				}}
	// 			>
	// 				<Icon name='menu' />
	// 			</TouchableOpacity>
	// 		),
	// 	});
	// }, []);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>Pagina1Screen</Text>

			<Button title='Go to Page 2' onPress={() => navigation.navigate('Page 2')} />

			<Text style={styles.text}>Navigation with Arguments</Text>

			<View style={{ flexDirection: 'row', gap: 10 }}>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate('Person', {
							id: 1,
							name: 'Pedro',
						})
					}
					style={{ ...styles.bigBtn, backgroundColor: '#5856D6' }}
				>
					<Icon name='person' style={{ ...styles.icon, backgroundColor: colors.white }} />
					<Text style={styles.bigBtnText}>Pedro</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() =>
						navigation.navigate('Person', {
							id: 2,
							name: 'Maria',
						})
					}
					style={{ ...styles.bigBtn, backgroundColor: '#FF9427' }}
				>
					<Icon name='person' style={{ ...styles.icon, backgroundColor: colors.white }} />
					<Text style={styles.bigBtnText}>Maria</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Page1Screen;
