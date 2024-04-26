import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '~/navigation/Route';
import ChatScreen from '~/screens/ChatScreen';
import ChatDetailScreen from '~/screens/ChatDetailScreen';
import { Avatar } from 'react-native-paper';
import { View, Text } from 'react-native';

type RootStackParamList = {
  chatScreen: undefined;
  chatDetailScreen: { avatar: string; name: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackChat() {
  return (
    <Stack.Navigator initialRouteName={Routes.CHAT_SCREEN}>
      <Stack.Screen
        options={{ title: 'WhatsApp' }}
        name={Routes.CHAT_SCREEN}
        component={ChatScreen}
      />
      <Stack.Screen
        options={({ route }) => {
          return {
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar.Image
                  size={40}
                  source={{ uri: route?.params?.avatar }}
                />
                <Text
                  style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold' }}
                >
                  {route?.params?.name}
                </Text>
              </View>
            ),
          };
        }}
        name={Routes.CHAT_DEDAIL_SCREEN}
        component={ChatDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default StackChat;
