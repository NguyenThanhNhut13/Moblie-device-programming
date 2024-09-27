import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export const phones = [
  {
    id: 1,
    name: 'Điện thoại Vsmart Joy 3 - Hàng chính hãng',
    rating: 5,
    currentPrice: '1.790.000 đ',
    oldPrice: '1.790.000 đ',
    color: 'xanh dương',
    supplier: 'Tiki Trading',
    image: require('../assets/phone/vs_blue.png')
  },
  {
    id: 2,
    name: 'Điện thoại Vsmart Joy 3 - Hàng chính hãng',
    rating: 5,
    currentPrice: '1.790.000 đ',
    oldPrice: '1.790.000 đ',
    color: 'đỏ',
    supplier: 'Tiki Trading',
    image: require('../assets/phone/vs_red.png')
  },
  {
    id: 3,
    name: 'Điện thoại Vsmart Joy 3 - Hàng chính hãng',
    rating: 5,
    currentPrice: '1.790.000 đ',
    oldPrice: '1.790.000 đ',
    color: 'đen',
    supplier: 'Tiki Trading',
    image: require('../assets/phone/vs_black.png')
  },
  {
    id: 4,
    name: 'Điện thoại Vsmart Joy 3 - Hàng chính hãng',
    rating: 5,
    currentPrice: '1.790.000 đ',
    oldPrice: '1.790.000 đ',
    color: 'trắng',
    supplier: 'Tiki Trading',
    image: require('../assets/phone/vs_silver.png')
  }
]

const ProductDetailScreen = ({route, navigation}) => {
  const [phone, setPhone] = useState(phones[0]);

  const showChooseProductColor = () => {
    navigation.navigate('ChooseProductColor', {phone: phone});
  }

  const {color} = route.params || phone.color;

  useEffect(() => {
    phones.forEach((phone) => {
      if(phone.color === color) {
        setPhone(phone);
      }
    })
  }, [route.params]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={phone.image} style={styles.phone}/>
      </View>

      <Text style={styles.productName}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>

      <View style={styles.ratingContainer}>
        <View style={styles.ratingStartGroup}>
          {
            Array(phone.rating).fill().map((_, i) => (
              <Image key={i} source={require('../assets/star.png')} />
            ))
          }
        </View>
        <Text>(Xem 828 đánh giá)</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.curentPrice}>1.790.000 đ</Text>
        <Text style={styles.oldPrice}>1.790.000 đ</Text>
      </View>

        <Text style={styles.priceGurantee}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN &nbsp;  
          <Image source={require('../assets/Group 1.png')} style={styles.seeDetail}/>
        </Text>

        <TouchableOpacity style={styles.colorButton} onPress={
            showChooseProductColor
        }>
          <Text style={styles.colorButtonText}>4 MÀU - CHỌN MÀU</Text>
          <Image source={require('../assets/Vector.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.purschaseButton}>
          <Text style={styles.purschaseButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>

        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  phone: {
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 15,
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingStartGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 23,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 13,
  },
  curentPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 15,
    textDecorationLine: 'line-through',
    color: 'gray',
    marginLeft: 10,
  },
  priceGurantee: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'red',
  },
  seeDetail: {
    width: 13,
    height: 13,
    marginLeft: 5,
  },
  colorButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: 'black',
  },
  colorButtonText: {
    fontSize: 15,
    marginRight: 71
  },
  purschaseButton: {
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  purschaseButtonText: {
    color: 'white',
    fontSize: 15,
  },

  
});

export default ProductDetailScreen;
