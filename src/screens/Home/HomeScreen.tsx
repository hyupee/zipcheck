import { RootNavigationProps } from '@/Navigation.types';
import { Typography } from '@/components/Typography/Typography';
import { colors } from '@/libs/theme/colors';
import styled from '@emotion/native';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const navigation = useNavigation<RootNavigationProps>();

  const handleButtonClick = () => {
    navigation.navigate('Check');
  };

  return (
    <Container>
      <View>
        <Typography variant="headline/24-bold" color="black">
          내가 살아갈{'\n'}집을 확인해볼까요?
        </Typography>

        <Button onPress={handleButtonClick} underlayColor={colors.primaryDark}>
          <Typography variant="button/15-bold" color="white">
            확인하기
          </Typography>
        </Button>
      </View>
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 30px;
  display: flex;
  justify-content: center;
`;

const Button = styled.TouchableHighlight`
  margin-top: 30px;
  align-items: center;
  width: 100%;
  padding: 14px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
`;
