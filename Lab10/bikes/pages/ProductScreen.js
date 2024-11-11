import { Image, StyleSheet, Text, SafeAreaView, TouchableOpacity, View, ScrollView, FlatList } from "react-native"
import Icon from 'react-native-vector-icons/Feather';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes, findByType } from "../redux/slices/BikeSlice";

const ProductScreen = ({navigation}) => {

    const types = [
        {
            id: 1,
            name: 'All'
        },
        {
            id: 2,
            name: 'Roadbike'
        }, {
            id: 3,
            name: 'Moutain'
        },
        {
            id: 4,
            name: 'Pina'
        },
    ]
    const [typeChoose, setTypeChoose] = useState(types[0]);
    const dispatch = useDispatch();
    const bikes = useSelector((state) => state.bikes.bikes);

    useEffect(() => {
        const fet = async () => {
            if(typeChoose.id === 1) {
                await dispatch(fetchBikes())
            } else {
                await dispatch(findByType(typeChoose.name))
            }
        }
        fet();
    }, [typeChoose])
                    

    const renderItem = (item) => {
        return (
            <View style={styles.productContainer}>
                <Icon name="heart" size={20} color="#000" style={styles.iconHeart}/>
                <TouchableOpacity onPress={() => navigation.navigate("productDetail", {product: item})}>
                    <Image source={{uri: item.image}} style={styles.productImage}/>
                </TouchableOpacity>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                The world's Best Bike
            </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.typeButtonContainer}

            >   
                {types.map(type => (
                    <TouchableOpacity key={type.id} style={styles.typeButton} onPress={() => setTypeChoose(type)}>
                        <Text style={styles.typeText}>{type.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <FlatList
                data={bikes}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    },
    typeButtonContainer: {
        marginVertical: 10,
    },
    typeButton: {
        paddingHorizontal: 40,
        borderRadius: 5,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: "#E94141"
    },
    typeText: {
        color: "gray",
        fontSize: 16
    },
    productContainer: {
        backgroundColor: "#f9f9f9",
        margin: 10,
        borderRadius: 20,
        padding: 10
    },
    iconHeart: {
        position: "absolute",
        top: 15,
        left: 15,
        zIndex: 1
    },
    productImage: {
        height: 150,
        width: 150
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center"
    },

    
    
})

export default ProductScreen;


