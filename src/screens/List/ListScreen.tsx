import { FlatList } from 'react-native';
import { roomList } from './__mocks__/room-list';
import { RoomListItem } from './components/RoomListItem';

export const ListScreen = () => {
  return (
    <FlatList
      data={roomList}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <RoomListItem item={item} />}
      keyExtractor={item => item.id}
    />
  );
};
