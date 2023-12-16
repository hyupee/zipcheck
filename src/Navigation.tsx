import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import {
  CheckStackParamList,
  MainStackParamList,
  RootStackParamList,
} from './Navigation.types';
import { colors } from './libs/theme/colors';
import { CheckScreen } from './screens/Check/CheckScreen';
import { HomeScreen } from './screens/Home/HomeScreen';
import { ListScreen } from './screens/List/ListScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const CheckStack = createNativeStackNavigator<CheckStackParamList>();
const MainTab = createBottomTabNavigator<MainStackParamList>();

const DEFAULT_SCREEN_OPTION = {
  headerShown: false,
};

const DEFAULT_HEADER_TITLE_STYLE = {
  fontSize: 16,
};

export const Navigation = () => {
  return (
    <RootStack.Navigator initialRouteName="Main">
      <RootStack.Screen
        name="Main"
        component={MainTabs}
        options={DEFAULT_SCREEN_OPTION}
      />
      <RootStack.Screen
        name="Check"
        component={CheckNavigation}
        options={DEFAULT_SCREEN_OPTION}
      />
    </RootStack.Navigator>
  );
};

export const CheckNavigation = () => {
  return (
    <CheckStack.Navigator initialRouteName="First">
      <CheckStack.Screen
        name="First"
        component={CheckScreen}
        options={DEFAULT_SCREEN_OPTION}
      />
    </CheckStack.Navigator>
  );
};

export const MainTabs = () => {
  return (
    <MainTab.Navigator initialRouteName="Home">
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...DEFAULT_SCREEN_OPTION,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              type={IconType.Foundation}
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="List"
        component={ListScreen}
        options={{
          headerTitle: '발품 리스트',
          headerTitleStyle: DEFAULT_HEADER_TITLE_STYLE,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Icon
              name="list"
              type={IconType.Foundation}
              color={focused ? colors.primary : colors.gray}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
