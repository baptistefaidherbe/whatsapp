import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import React from 'react';

interface ChatDetailScreenProps {
  route: any;
}

const ChatDetailScreen = ({ route }: ChatDetailScreenProps) => {
  const { message } = route.params;

  return (
    <View>
      <FlatList
        scrollEnabled={true}
        data={message}
        renderItem={({ item }) => (
          <Card  style={styles.container}>
            <Card.Content>
              <Text style={{ textAlign: item.userId === 1 ? 'right' : 'left' }}>
                {item.text}
              </Text>
            </Card.Content>
          </Card>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ChatDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#D8FCD2',
 
  },

  name: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
