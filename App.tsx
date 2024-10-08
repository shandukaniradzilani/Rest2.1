import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import AddMenuItemScreen from './AddMenuItemScreen';

type MenuItem = {
  id: string;
  name: string;
  description: string;
  course: string;
  price: string;
};

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel's Menu</Text>
      <Text>Total Items: {menuItems.length}</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.course} - ${item.price}</Text>
          </View>
        )}
      />
      <Button
        title="Add Menu Item"
        onPress={() => navigation.navigate('AddMenuItem', { setMenuItems, menuItems })}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMenuItem" component={AddMenuItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  menuItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

