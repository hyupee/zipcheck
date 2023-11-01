import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CheckStackParamList,
  MainStackParamList,
  RootStackParamList,
} from './Navigation.types';
import { HomeScreen } from './screens/Home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListScreen } from './screens/List/ListScreen';
import { CheckScreen } from './screens/Check/CheckScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const CheckStack = createNativeStackNavigator<CheckStackParamList>();
const MainTab = createBottomTabNavigator<MainStackParamList>();

export const Navigation = () => {
  return (
    <RootStack.Navigator initialRouteName="Main">
      <RootStack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Check"
        component={CheckNavigation}
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
      />
      <MainTab.Screen
        name="List"
        component={ListScreen}
        options={{ headerShown: false }}
      />
    </MainTab.Navigator>
  );
};
