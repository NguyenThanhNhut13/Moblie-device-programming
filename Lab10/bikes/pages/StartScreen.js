import { Image, StyleSheet, Text, SafeAreaView, TouchableOpacity, View } from "react-native"

const StartScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                A premium online store for sporter and their stylish choice
            </Text>
            <View style={styles.imageContainer}>
                <Image source={{uri: "https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6RgZqYaaj2yoEYcjn1xLuF6ejkVm5sj0Q2REjJLnMUO7MB-JMtKcmnFw8oA-21~I278VVSigiVjDi7As9CR8e3d0kVdVahjQ~iK24vFqNq26DEEOxvhKmjWhZAptz4w3HeHoO~IRWnv~zcorXAalQ98u9FQT01fBOz5h3Xu-xZ1ccmd6yJnkN~HrEe0q~G2NjvHeZNIHigUZDSaqNOTgHiekyzPG7ia0oc~O9v16nJz15q0JFFhE3vWf4030yzjsSL~8XGw0oRTUWVMMhxxyYnwfZmfvbqe-B5y~Gechq~e5NVwMqeG~LOWh8KvYiOrY-jz0uuelyFgi2DqzkJuPA__"}} style={styles.image}/>
            </View>
            <Text style={styles.title}>
                POWER BIKE {"\n"}SHOP
            </Text>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("products")}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
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
    text: {
        fontSize: 18,
        textAlign: "center",
        marginHorizontal: 20
    },
    imageContainer: {
        height: 300,
        width: 300,
        marginVertical: 20
    },
    image: {
        height: "100%",
        width: "100%"
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center"
    },
    button: {
        backgroundColor: "#E94141",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 15,
        marginVertical: 20,
        width: '80%',
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        textAlign: "center"
    }
    
})

export default StartScreen;