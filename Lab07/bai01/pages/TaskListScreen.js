import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, StatusBar, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useState, useEffect } from 'react';
import useApi from '../hook/useApi';

const TaskListScreen = ({navigation, route}) => {
    const renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                <View style={styles.itemJobGroup}>
                  <Icon name="check-square" size={24} color="green" />
                  <Text style={styles.itemText}>{item}</Text>
                </View>
                <View style={styles.itemActionGroup}>
                  <TouchableOpacity style={styles.buttonEdit} onPress={() => navigation.navigate('AddJob', {action: 'edit', data: userData, oldJob: item})}>
                    <Icon name="edit-3" size={24} color="red" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonDelete} onPress={() => handleDelete(item)}>
                    <Icon name="trash-2" size={24} color="red" />
                  </TouchableOpacity>
                </View>
            </View>
        );
    }
    
    const {data} = route.params;
    const [userData, setUserData] = useState(data);
    const [search, setSearch] = useState('');
    const {deleteJob, getByName} = useApi('https://64598ce84eb3f674df924e51.mockapi.io/users');
    // const [loading, setLoading] = useState(false);

    const handleDelete = (item) => {
      Alert.alert(
        'Delete job', 
        `Are you sure to delete ${item}?`, 
        [
          {
            text: 'Cancel',
            style: 'cancel'
          }, 
          {
            text: 'OK',
            onPress: async () => {
              await deleteJob(data.name, item);
              setUserData(await getByName(data.name));
              Alert.alert('Delete job', 'Delete job successfully');
            }
          }
        ]);
    }

    const filteredJobs = search.trim() === ''
    ? userData.jobs 
    : userData.jobs.filter(job => job.includes(search));

    useEffect(() => {
      if (data) {
        setUserData(data);
      }
    }, [data]);
    

    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.header}>
                <Icon name="arrow-left" size={20} color="black" onPress={() => navigation.navigate('ManageTask')} />
                <View style={styles.headerContent}>
                    <View style={styles.headerImageContainer}>
                        <Image style={styles.headerImage} source={{uri: userData.image}} />
                    </View>
                    <View style={styles.headerText}>
                        <Text style={styles.headerTitle}>Hi {userData.name}</Text>
                        <Text style={styles.headerSubTitle}>Have agreat day a head</Text>
                    </View>
                </View>
            </View>
            <View style={styles.input}>
                <Icon name="search" size={20} color="black" style={{marginRight: 8}} />
                <TextInput 
                  placeholder='Search'
                  value={search}
                  onChangeText={newSearch => setSearch(newSearch)}
                />
            </View>
            <FlatList style={styles.listItem}
                data={filteredJobs}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddJob', { data: userData, action: 'add'})} >
                <Icon name="plus" size={20} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight || 0
        // marginTop: 40
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
        marginTop: 24,
        marginBottom: 20
    },
    listItem: {
      width: '90%',
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: 'rgba(222, 225, 230, 0.47)',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
      marginTop: 20,
      
    },
    itemText: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'left',
      marginLeft: 15
    },
    itemJobGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20
    },
    itemActionGroup: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    buttonEdit: {
      marginHorizontal: 5
    },
    button: {
      backgroundColor: '#00BDD6',
      padding: 15,
      borderRadius: 25,
      marginTop: 20,
      marginBottom: 40
    }

});

export default TaskListScreen;