import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from '~/screens/NewsScreen';
import StackChat from '~/navigation/StackChat';
import { Routes } from '~/navigation/Route';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

type iconName =
  | 'chatbubble-ellipses'
  | 'chatbubble-ellipses-outline'
  | 'newspaper'
  | 'newspaper-outline';

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: iconName = 'chatbubble-ellipses-outline';

          if (route.name === Routes.STACK_CHAT) {
            iconName = `chatbubble-ellipses${focused ? '' : '-outline'}`;
          } else if (route.name === Routes.NEWS_SCREEN) {
            iconName = `newspaper${focused ? '' : '-outline'}`;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name={Routes.STACK_CHAT}
        component={StackChat}
      />
      <Tab.Screen name={Routes.NEWS_SCREEN} component={NewsScreen} />
    </Tab.Navigator>
  );
}
export default BottomTab;
