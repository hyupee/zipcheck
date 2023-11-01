import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  List: undefined;
};

export type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>;
export type HomeNavigationProps = NativeStackNavigationProp<HomeStackParamList>;

export type MainStackParamList = {
  Home: undefined;
  List: undefined;
};
