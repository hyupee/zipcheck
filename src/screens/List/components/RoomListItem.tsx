import { Typography } from '@/components/Typography/Typography';
import { Room } from '@/models/room';
import { formatPriceKo } from '@/utils/format';
import styled from '@emotion/native';
import { View } from 'react-native';

interface Props {
  item: Room;
}

export const RoomListItem = ({ item }: Props) => {
  return (
    <RoomContainer key={item.address}>
      <Image source={{ uri: item.imageUrl }} />
      <View>
        <Top>
          <Typography variant="caption/12-regular" color="gray600">
            {item.roomTypes}
          </Typography>
        </Top>
        <Price variant="headline/16-bold" color="gray900">
          {item.salesTypes} {formatPriceKo(item.depositPrice)}
          {item.salesTypes === '월세'
            ? `/${formatPriceKo(item.rentPrice)}`
            : null}
        </Price>
        <MaintenanceFee variant="body/13-regular" color="gray900">
          관리비 {item.maintenanceFee}만원
        </MaintenanceFee>
        <Address variant="body/13-regular" color="gray900">
          {item.size}평 {item.floor}층
        </Address>
        <Typography variant="body/13-regular" color="gray900">
          {item.address}
        </Typography>
      </View>
    </RoomContainer>
  );
};

const RoomContainer = styled.View`
  padding: 14px 14px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray100};
  flex-direction: row;
  gap: 14px;
`;

const Image = styled.Image`
  width: 132px;
  height: 107px;
  border-radius: 8px;
`;

const Price = styled(Typography)`
  margin-bottom: 3px;
`;

const MaintenanceFee = styled(Typography)`
  margin-bottom: 8px;
`;

const Address = styled(Typography)`
  margin-bottom: 2px;
`;

const Top = styled.View`
  flex-direction: row;
  gap: 4px;
  margin-bottom: 4px;
`;
