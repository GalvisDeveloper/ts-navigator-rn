import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: top + 10,
      }}>
      <Text style={styles.title}>Tab1Screen </Text>
      {/* IconsContainer  */}
      <View style={{flexDirection: 'row'}}>
        <Icon name="flight" style={styles.icon} />
        <Icon name="two-wheeler" style={styles.icon} />
        <Icon name="subway" style={styles.icon} />
        <Icon name="local-movies" style={styles.icon} />
        <Icon name="pending" style={styles.icon} />
        <Icon name="tungsten" style={styles.icon} />
        <Icon name="assignment" style={styles.icon} />
      </View>
    </View>
  );
};

export default Tab1Screen;
