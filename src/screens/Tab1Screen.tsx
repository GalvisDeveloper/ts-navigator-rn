import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
	const { top } = useSafeAreaInsets();

	useEffect(() => {
		console.log('Tab1Screen effect');
	}, []);

	return (
		<View
			style={{
				...styles.globalMargin,
				marginTop: top + 10,
			}}
		>
			<Text style={styles.title}>Tab1Screen </Text>
			{/* IconsContainer  */}
			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
				<TouchableIcon name='flight' />
				<TouchableIcon name='two-wheeler' />
				<TouchableIcon name='subway' />
				<TouchableIcon name='local-movies' />
				<TouchableIcon name='pending' />
				<TouchableIcon name='tungsten' />
				<TouchableIcon name='assignment' />
			</View>
		</View>
	);
};

export default Tab1Screen;
