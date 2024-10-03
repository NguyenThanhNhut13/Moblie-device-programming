import {View, StyleSheet, TouchableOpacity, Text, SafeAreaView} from 'react-native';

const StartScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Nguyễn Thanh Nhứt - 21140001</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')} 
            style={styles.convertScreenButton}>
                <Text style={styles.convertScreenButtonText}>
                    ChatScreen
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')} 
            style={styles.convertScreenButton}>
                <Text style={styles.convertScreenButtonText}>
                    SearchScreen
                </Text>
            </TouchableOpacity>
            <View style={styles.apiContainer}>
                <Text style={styles.api}>
                    API1: https://64590e428badff578e02d387.mockapi.io/products
                </Text>
                <Text style={styles.api}>
                    API2: https://64590e428badff578e02d387.mockapi.io/test
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    convertScreenButton: {
        marginBottom: 20, 
        backgroundColor: '#1BA9FF', 
        marginHorizontal: 10
    },
    convertScreenButtonText: {
      textAlign: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      fontSize: 16, 
      fontWeight: 'regular', 
      fontFamily: 'Roboto', 
      color: '#fff'
    },
    apiContainer: {
        marginTop: 20
    },
    api: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333'
    }
});

export default StartScreen;