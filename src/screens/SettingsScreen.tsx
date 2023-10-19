import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

const SettingsScreen = () => {
	const insets = useSafeAreaInsets();

	return (
		<View style={{ ...styles.globalMargin, marginTop: insets.top }}>
			<Text style={styles.title}>Settings screen</Text>
		</View>
	);
};

export default SettingsScreen;
