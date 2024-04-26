import { View, Text, FlatList } from 'react-native';
import React from 'react';
import data from '~/data/MOCK_DATA.json';
import CardComponent from '~/components/card';

const ChatScreen = () => {
    return (
        <FlatList
            scrollEnabled={true}
            data={data}
            renderItem={({ item }) => <CardComponent item={item} />}
            keyExtractor={(user) => user.name}
        />
    );
};

export default ChatScreen;
