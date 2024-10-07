import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useState } from 'react';


const TaskListScreen = ({navigation}) => {
    const renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                <Icon name="check-square" size={20} color="green" />
                <Text style={styles.itemText}>{item}</Text>
                <Icon name="edit-3" size={20} color="red" />
                <Icon name="trash-2" size={20} color="red" />
            </View>
        );
    }
    // const [data, setData] = useState([]);
    
    const data = [
        {
            id: 1, 
            name: 'Twinkle', 
            image: 'https://s.net.vn/oduQ', 
            job: [
                'To check email', 
                'UI task web page', 
                'Learn javascript basic',
                'Learn HTML advanced',
                'Medical App UI',
                'Learn Java'
            ]
        },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon name="arrow-left" size={20} color="black" onPress={() => navigation.navigate('ManageTask')} />
                <View style={styles.headerContent}>
                    <View style={styles.headerImageContainer}>
                        <Image style={styles.headerImage} source={{uri: data[0].image}} />
                    </View>
                    <View style={styles.headerText}>
                        <Text style={styles.headerTitle}>Hi {data[0].name}</Text>
                        <Text style={styles.headerSubTitle}>Have agreat day a head</Text>
                    </View>
                </View>
            </View>
            <View style={styles.input}>
                <Icon name="search" size={20} color="black" style={{marginRight: 8}} />
                <TextInput placeholder='Search'/>
            </View>
            <FlatList 
                data={data[0].job}
                keyExtractor={item => item}
                renderItem={renderItem}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddJob')} >
                <Icon name="plus" size={20} color="white" />
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
        marginTop: 40
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 24
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden'
    },
    headerImage: {
        width: 50,
        height: 50,
        backgroundColor: 'pink'
    },
    headerText: {
        marginLeft: 16,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    headerSubTitle: {
        fontSize: 14,
        color: 'gray',
        fontWeight: '500'
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
        marginTop: 24
    },

});

export default TaskListScreen;