import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBike,  } from '../redux/slices/BikeSlice';
import Icon from 'react-native-vector-icons/Feather';

export const DashboardScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [discount, setDiscount] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const dispatch = useDispatch();


  const handleAddProduct = () => {
    if (!name || !image || !discount || !price || !description || !type) {
      Alert.alert("Lỗi", "Vui lòng điền đầy đủ thông tin.");
      return;
    }

    const newProduct = {
      name,
      image,
      discount,
      price,
      description,
      type,
    };

    dispatch(addBike(newProduct));

    // Reset form fields
    setName('');
    setImage('');
    setDiscount('');
    setPrice('');
    setDescription('');
    setType('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('start')}>
        <Icon name="chevron-left" size={30} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>Thêm sản phẩm mới</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Tên sản phẩm"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Link hình ảnh"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Giảm giá (%)"
        value={discount}
        onChangeText={setDiscount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Giá (VND)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Mô tả sản phẩm"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Loại sản phẩm (ví dụ: Roadbike)"
        value={type}
        onChangeText={setType}
      />

      <Button title="Thêm sản phẩm" onPress={handleAddProduct} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 12,
    borderRadius: 5,
  },
  productItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
