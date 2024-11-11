import { Image, StyleSheet, Text, SafeAreaView, TouchableOpacity, View } from "react-native"

const ProductScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                The world's Best Bike
            </Text>

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
    
    
})

export default ProductScreen;


