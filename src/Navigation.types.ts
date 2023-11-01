import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Check: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  List: undefined;
};

export type CheckStackParamList = {
  First: undefined;
};

export type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type MainNavigationProps = NativeStackNavigationProp<MainStackParamList>;
export type CheckNavigationProps =
  NativeStackNavigationProp<CheckStackParamList>;
