import { Image, StyleSheet, Text, SafeAreaView, TouchableOpacity, View, ScrollView, FlatList } from "react-native"
import Icon from 'react-native-vector-icons/Feather'

const ProductDetailScreen = ({navigation, route}) => {
    const {product} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: product.image}} style={styles.image}/>
            </View>
            <Text style={styles.title}>{product.name}</Text>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>
                    {product.salePrice} OF {product.price}
                </Text>
                <Text style={styles.newPrice}>
                    449$
                </Text>
            </View>
            <Text style={styles.label}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.buttonContainer}>
                <Icon name="heart" size={30} color="#000" style={{textAlign: "center"}}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    imageContainer: {
        height: 300,
        width: "100%",
    },
    image: {
        height: "100%",
        width: "100%",
        textAlign:"left",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 20
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    price: {
        textDecorationLine: "line-through",
        color: "gray",
        marginRight: 10
    },
    newPrice: {
        color: "red",
        fontSize: 25,
    },
    label: {
        fontSize: 35,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginVertical: 10
    },
    description: {
        marginHorizontal: 35,
        textAlign: "center",
        marginVertical: 20,
        fontSize: 30,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#E94141",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 25,
        marginLeft: 20,
        width: '70%',
        alignSelf: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        textAlign: "center"
    }

})

export default ProductDetailScreen;