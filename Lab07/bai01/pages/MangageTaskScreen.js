import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ManageTaskScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../assets/Image 95.png')} style={{width: 271, height: 271}} />
            </View>
            <Text style={styles.title}>
                MANAGE YOUR {"\n"}TASK
            </Text>
            <View style={styles.input}>
                <Icon name="mail" size={20} color="black" style={{marginRight: 8}} />
                <TextInput placeholder='Enter your name'/>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TaskList')} >
                <Text style={styles.buttonText}>
                    GET STARTED 
                </Text>
                <Icon name="arrow-right" size={20} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#8353E2',
        marginTop: 24,        
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#9095A0',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 18,
        width: '80%',
        marginTop: 60
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00BDD6',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 18,
        width: '80%',
        marginTop: 110
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        marginRight: 8
    }

});

export default ManageTaskScreen;