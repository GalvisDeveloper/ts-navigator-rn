import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
	name: string;
}

const TouchableIcon = (props: Props) => {
	const { changeFavIcon } = useContext(AuthContext);

	return (
		<TouchableOpacity onPress={() => changeFavIcon(props.name)}>
			<Icon name={props.name} style={styles.bigIcon} size={90} />
		</TouchableOpacity>
	);
};

export default TouchableIcon;
