import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

const ContactsScreen = () => {
	const { signIn, authState } = useContext(AuthContext);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>ContactsScreen</Text>

			{!authState.isLogged && <Button title='SignIn' onPress={signIn} />}
		</View>
	);
};

export default ContactsScreen;
