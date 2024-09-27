import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import {phones} from './ProductDetailScreen';


export const colors = [
  {
    id: 1,
    name: 'trắng',
    image: require('../assets/color/Rectangle 4.png')
  },
  {
    id: 2,
    name: 'đỏ',
    image: require('../assets/color/Rectangle 5.png')
  },
  {
    id: 3,
    name: 'đen',
    image: require('../assets/color/Rectangle 6.png')
  },
  {
    id: 4,
    name: 'xanh dương',
    image: require('../assets/color/Rectangle 7.png')
  }
]

const ChooseProductColor = ({route, navigation}) => {
    const {phone} = route.params || {};
    const [phoneChoose, setPhoneChoose] = useState(phone);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.productContainer}>
                <Image source={phoneChoose.image} style={styles.phone}/>
                <View style={styles.productInforContainer}>
                    <Text numberOfLines={2} style={styles.productName}>{phoneChoose.name}</Text>
                    <Text style={styles.productName}>Màu: <Text style={styles.textbold}>{phoneChoose.color}</Text></Text>
                    <Text style={styles.productName}>Cung cấp bởi: <Text style={styles.textbold}>{phoneChoose.supplier}</Text></Text>
                    <Text style={styles.productPrice}>{phoneChoose.currentPrice}</Text>
                </View>
            </View>

            <Text style={styles.chooseColor} >Chọn 1 màu bên dưới:</Text>

            <View style={styles.colorContainer}>
                {
                    colors.map((color) => (
                        <TouchableOpacity key={color.id} onPress={() => {
                            phones.forEach((phone) => {
                                if(phone.color === color.name) {
                                    setPhoneChoose(phone);
                                }
                            })
                        }}>
                            <Image source={color.image} style={styles.color}/>
                        </TouchableOpacity>
                    ))
                }
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductDetailScreen', {color: phoneChoose.color})}>
                <Text style={styles.buttonText}>XONG</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C4C4C4',
        marginTop: 40,
    },
    productContainer: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        flexDirection: 'row',
    },
    phone: {
        height: 150,
        width: 120,
        marginHorizontal: 20,
    },
    productInforContainer: {
        flex: 1,
        marginTop: 10,
    },
    productName: {
        fontSize: 15,
        marginBottom: 10,
    },
    textbold: {
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    chooseColor: {
        fontSize: 18,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    colorContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    color: {
        height: 85,
        width: 80,
    },
    button: {
        backgroundColor: 'rgba(25, 82, 226, 0.58)',
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
   
});

export default ChooseProductColor;