import { Avatar, Text } from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Routes } from '~/navigation/Route';
import { useNavigation } from '@react-navigation/native';
import { user } from '~/types';
import { StackNavigationProp } from '@react-navigation/stack';

export default function CardComponent({ item }: { item: user }) {
  type RootStackParamList = {
    chatDetailScreen: user;
  };

  type StarshipScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'chatDetailScreen'
  >;

  const { name, avatar } = item;

  const navigation = useNavigation<StarshipScreenNavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(Routes.CHAT_DEDAIL_SCREEN, item)}
      style={styles.container}
    >
      <Avatar.Image size={70} source={{ uri: avatar }} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: '#ddd',
    alignItems: 'center',
    marginTop: 5,
  },

  name: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
