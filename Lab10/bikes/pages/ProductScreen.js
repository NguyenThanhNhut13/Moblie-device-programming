import { Image, StyleSheet, Text, SafeAreaView, TouchableOpacity, View, ScrollView, FlatList } from "react-native"
import Icon from 'react-native-vector-icons/Feather';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBikes } from "../redux/slices/BikeSlice";

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
    const products = 
    [
        {
        "name": "Awesome Steel Bacon",
        "image": "https://s3-alpha-sig.figma.com/img/241c/1c58/11168d8e6671f151053b8a6c8424a1a8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pN3GEPMMamz7Zm0Com3QIo7h2zNn58kWKqP70KTwyjjcgjZtShTWRGO8NGEauv9QioW-Su6mMzNeLevW9SLrBOEFgv4-fg2L6xP7J3XPWnNvVboTjhit13Btp054K3Qp9zMOPpqj14Dn~JJIbwI5YhZ1JSbz6epBoX1mH-022OxltSK0SccZHDuiS2v3od3pvm9LdMGUaybqjKGsCXuO2xexUXR6L~XsWbcdTvee5VgW3Vc-Lbw6mDrDs-VkDHc9DGBz3zqD5U61C0Mi~tLq0pcAdrIWpzbQZj8XMrF3LXcjfwBbLaE8DDPedXjqjw86vFae6gcMucMBMph-avb3TQ__",
        "discount": "20",
        "price": "134.00",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "type": "Roadbike",
        "id": "1"
        },
        {
        "name": "Incredible Wooden Hat",
        "image": "https://loremflickr.com/640/480/transport",
        "discount": 92,
        "price": "997.00",
        "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        "type": "Mountain",
        "id": "4"
        },
        {
        "name": "Tasty Steel Chips",
        "image": "https://loremflickr.com/640/480/transport",
        "discount": 59,
        "price": "122.00",
        "description": "The Football Is Good For Training And Recreational Purposes",
        "type": "Mountain",
        "id": "7"
        },
        {
        "name": "Fantastic Fresh Fish",
        "image": "https://loremflickr.com/640/480/transport",
        "discount": 62,
        "price": "807.00",
        "description": "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
        "type": "Roadbike",
        "id": "9"
        },
        {
        "name": "Rustic Bronze Gloves",
        "image": "https://loremflickr.com/640/480/transport",
        "discount": 84,
        "price": "112.00",
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "type": "Roadbike",
        "id": "10"
        }
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
                    <TouchableOpacity key={type.id} style={styles.typeButton}>
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
        fontWeight: "bold"
    },
    productPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center"
    },

    
    
})

export default ProductScreen;


