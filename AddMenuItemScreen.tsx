import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values'
import { Picker } from '@react-native-picker/picker';


const AddMenuItemScreen = ({ route, navigation }: any) => {
  const { setMenuItems, menuItems } = route.params;
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starter');
  const [price, setPrice] = useState('');

  

  const addMenuItem = () => {
    const newItem = {
      id: uuidv4(),
      name,
      description,
      course,
      price: parseFloat(price),//ensure that this is in a float
    };

    setMenuItems([...menuItems, newItem]);
    navigation.navigate('Home');
  };

  
 
  function itemValue(itemValue: string, itemIndex: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Dish Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter dish name" />

      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Enter description" />

      <Text style={styles.label}>Course</Text>
      <TextInput style={styles.input} value={course} onChangeText={setCourse} placeholder="Type of Course"/>

      <Text style={styles.label}>Price</Text>
    <Picker
    selectedValue={course}
    onValueChange={(itemValue) setCourse(itemValue)}
    style={styles.picker}>
    

      <Button title="Add Item" onPress={addMenuItem} />
    </View>
  );
};

//filter menu course
//const filterByCourse= (course: 'starter' | 'main' | 'dessert') => {
  //return menu.filter((item) => item.course === course);
//};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f8ff'},
  label: { fontSize: 16, marginBottom: 5, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, backgroundColor: '#fff'},
});

export default AddMenuItemScreen;
