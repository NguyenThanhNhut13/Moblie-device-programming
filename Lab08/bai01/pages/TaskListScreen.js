import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, StatusBar, Alert, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useState, useEffect } from 'react';
import useApi from '../hook/useApi';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, deleteTodo, setTodos, fetchTodos } from '../Redux/actions';

const TaskListScreen = () => {
    const renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                <View style={styles.itemJobGroup}>
                  <Icon name="check-square" size={24} color="green" />
                  <Text style={styles.itemText}>{item}</Text>
                </View>
                <View style={styles.itemActionGroup}>
                  <TouchableOpacity style={styles.buttonEdit} onPress={() => handleEdit(item)}>
                    <Icon name="edit-3" size={24} color="red" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonDelete} onPress={() => handleDelete(item)}>
                    <Icon name="trash-2" size={24} color="red" />
                  </TouchableOpacity>
                </View>
            </View>
        );
    }

    const {getByName} = useApi('https://64598ce84eb3f674df924e51.mockapi.io/users');

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState({});   
    const [action, setAction] = useState('');

    const fetchData = async () => {
        const data = await getByName('Thanh Nhứt');
        setUserData(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [userData]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newJob, setNewJob] = useState('');
    const [oldJob, setOldJob] = useState('');

    const filteredJobs = search.trim() === ''
    ? todos 
    : todos.filter(job => job.includes(search));

    const handleAddTodo = () => {
        if (newJob.trim()) {
            dispatch(addTodo(newJob));
            setModalVisible(false);
            setNewJob('');
        } else {
            Alert.alert('Add job', 'Job name is required');
            return;
        }
    }

    const handleEdit = (item) => {
        setAction('edit');
        setOldJob(item);
        setNewJob(item);
        setModalVisible(true);
    }

    const handleSave = () => {
        if (newJob.trim()) {
            if (newJob === oldJob) {
                setNewJob('');
                return;
            }
            dispatch(updateTodo(oldJob, newJob));
            Alert.alert('Edit job', 'Edit job successfully');
            setModalVisible(false);
            setNewJob('');  
        } else {
            Alert.alert('Edit job', 'Job name is required');
            return;
        }
    }


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
              onPress: () => {
                  dispatch(deleteTodo(item));
                  Alert.alert('Delete job', 'Delete job successfully');
                  fetchData();
              }
            }
          ]);
      }

    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.header}>
                <Icon name="arrow-left" size={20} color="black" onPress={() => {}} />
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
                  style={{width: '90%'}}
                  placeholder='Search'
                  value={search}
                  onChangeText={newSearch => setSearch(newSearch)}
                />
            </View>
            <FlatList style={styles.listItem}
                showsVerticalScrollIndicator={false}
                data={filteredJobs}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
            <TouchableOpacity style={styles.button} onPress={() => {setModalVisible(true); setAction('add')}}>
                <Icon name="plus" size={20} color="white" />
            </TouchableOpacity>

            {/* Modal */}
            <Modal 
                visible={modalVisible}
                transparent={true}
                animationType='slide'
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                            {action === 'add' ? 'Add new job' : 'Edit job'}
                        </Text>
                        <View style={styles.inputModalContainer}>
                            <Icon name="check-square" size={24} color="green" />    
                            <TextInput
                                value={newJob}
                                onChangeText={setNewJob}
                                placeholder='Enter new job'
                                style={styles.inputModal}
                            />
                        </View>
                        <View style={styles.buttonModalContainer}>
                            <TouchableOpacity style={styles.buttonAddModalCancel} onPress={() => {setModalVisible(false); setNewJob('');}}>
                                <Text style={styles.buttonAddModalCancelText}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonAddModalAdd} onPress={() => {action === 'edit' ? handleSave() : handleAddTodo()}}>
                                <Text style={styles.buttonAddModalAddText}>
                                    {action === 'add' ? 'Add' : 'Save'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
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
    },

    // Modal
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20
    },
    inputModalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#9095A0',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    inputModal: {
        flex: 1,
        marginLeft: 10
    },
    buttonModalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    buttonAddModalAdd: {
        backgroundColor: '#00BDD6',
        padding: 15,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '48%'
    },
    buttonAddModalAddText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonAddModalCancel: {
        backgroundColor: 'gray',
        padding: 15,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '48%',
    },
    buttonAddModalCancelText: {
        color: '#fff',
        fontWeight: 'bold'
    }

});

export default TaskListScreen;