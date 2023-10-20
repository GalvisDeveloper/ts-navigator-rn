import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = () => {
	const insets = useSafeAreaInsets();

	const context = useContext(AuthContext);

	return (
		<View style={{ ...styles.globalMargin, marginTop: insets.top }}>
			<Text style={styles.title}>Settings screen</Text>
			<Text style={styles.title}>{JSON.stringify(context.authState, null, 4) || ''}</Text>

			{context?.authState?.favoriteIcon && <Icon name={context.authState.favoriteIcon} size={150} color={colors.primary} />}
		</View>
	);
};

export default SettingsScreen;
