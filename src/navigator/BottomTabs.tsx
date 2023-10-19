import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import {colors, styles} from '../theme/appTheme';
import TopTabsAndroid from './TopTabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Platform, Text} from 'react-native';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TabIos = createBottomTabNavigator();
const TabAndroid = createMaterialBottomTabNavigator();

enum RouteTypes {
  Tab1 = 'Tab1',
  Tab2 = 'Tab2',
  Stack = 'StackNavigator',
}

const ROUTES = {
  [RouteTypes.Tab1]: <Icon name="emoji-emotions" style={styles.icon} />,
  [RouteTypes.Tab2]: <Icon name="question-answer" style={styles.icon} />,
  [RouteTypes.Stack]: (
    <Icon name="switch-access-shortcut" style={styles.icon} />
  ),
};

type TabBarIconProps = {
  focused: boolean;
  color: string;
};

export const BottomTabs = (props: any) => {
  return Platform.OS === 'ios' ? (
    <BottomTabsIOS {...props} />
  ) : (
    <BottomTabsAndroid {...props} />
  );
};

const TabIcons = (
  route: RouteProp<ParamListBase, string>,
  props: TabBarIconProps,
) => {
  let iconName: RouteTypes = (route.name as RouteTypes) || '';
  return <Text style={{color: props.color}}>{ROUTES[iconName]}</Text>;
};

const BottomTabsAndroid = () => {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.white,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: props => {
          return TabIcons(route, props);
        },
      })}>
      <TabAndroid.Screen
        name="Tab1"
        options={{title: 'Icons'}}
        component={Tab1Screen}
      />
      <TabAndroid.Screen
        name="Tab2"
        options={{title: 'Chats'}}
        component={TopTabsAndroid}
      />
      <TabAndroid.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabAndroid.Navigator>
  );
};

const BottomTabsIOS = () => {
  return (
    <TabIos.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.gray,
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarItemStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 1,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: props => {
          return TabIcons(route, props);
        },
      })}>
      <TabIos.Screen
        name="Tab1"
        options={{title: 'Icons'}}
        component={Tab1Screen}
      />
      <TabIos.Screen
        name="Tab2"
        options={{title: 'Chats'}}
        component={Tab2Screen}
      />
      <TabIos.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </TabIos.Navigator>
  );
};

export default BottomTabs;
