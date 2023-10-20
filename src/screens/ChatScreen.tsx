import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme';

const ChatScreen = () => {
	const { authState } = useContext(AuthContext);

	return (
		<View style={styles.globalMargin}>
			<Text style={styles.title}>ChatScreen</Text>
			{authState.username && (
				<Text style={styles.text}>
					Chat Open with: <Text style={{ ...styles.text, color: 'red' }}>{authState.username}</Text>{' '}
				</Text>
			)}
		</View>
	);
};

export default ChatScreen;
