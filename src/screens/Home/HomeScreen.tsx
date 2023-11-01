import styled from '@emotion/native';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  return (
    <Container>
      <View>
        <Text>Home Screen</Text>
      </View>
    </Container>
  );
};

const Container = styled(SafeAreaView)``;
