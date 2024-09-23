import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../bai01/assets/vs_blue.png')} style={styles.phone}/>
      </View>

      <Text style={styles.productName}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>

      <View style={styles.ratingContainer}>
        <View style={styles.ratingStartGroup}>
          <Image source={require('../../bai01/assets/star.png')}/>
          <Image source={require('../../bai01/assets/star.png')}/>
          <Image source={require('../../bai01/assets/star.png')}/>
          <Image source={require('../../bai01/assets/star.png')}/>
          <Image source={require('../../bai01/assets/star.png')}/>
        </View>
        <Text>(Xem 828 đánh giá)</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.curentPrice}>1.790.000 đ</Text>
        <Text style={styles.oldPrice}>1.790.000 đ</Text>
      </View>

        <Text style={styles.priceGurantee}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN &nbsp;  
          <Image source={require('../../bai01/assets/Group 1.png')} style={styles.seeDetail}/>
        </Text>

        <TouchableOpacity style={styles.colorButton} onPress={
            () => {
                navigation.navigate('ChooseProductColor');
            }
        }>
          <Text style={styles.colorButtonText}>4 MÀU - CHỌN MÀU</Text>
          <Image source={require('../../bai01/assets/Vector.png')}/>
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
