import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const AlbumsScreen = () => {
	const { logout, authState } = useContext(AuthContext);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>AlbumsScreen</Text>

			{authState.isLogged && <Button title='Log Out' onPress={logout} />}
		</View>
	);
};

export default AlbumsScreen;
