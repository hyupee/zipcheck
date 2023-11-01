import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeStackParamList,
  MainStackParamList,
  RootStackParamList,
} from './Navigation.types';
import { HomeScreen } from './screens/Home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListScreen } from './screens/List/ListScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const MainTab = createBottomTabNavigator<MainStackParamList>();

export const Navigation = () => {
  return (
    <RootStack.Navigator initialRouteName="Main">
      <RootStack.Screen
        name="Main"
        component={MainTabs}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
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
