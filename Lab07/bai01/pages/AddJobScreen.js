import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import useApi from '../hook/useApi';

const AddJobScreen = ({navigation, route}) => {
    const {data, action, oldJob} = route.params;
    const {addJob, editJob} = useApi('https://64598ce84eb3f674df924e51.mockapi.io/users');
    const [newJob, setNewJob] = useState(action === 'edit' ? oldJob : '');

    const handleFinish = async () => {
      let response = {};
      if (action === 'add') {
        response = await addJob(data.name, newJob);
        Alert.alert('Add job', 'Add job successfully');
      } else if (action === 'edit') {
        response = await editJob(data.name, oldJob, newJob);
        Alert.alert('Edit job', 'Edit job successfully');
      }
      navigation.navigate('TaskList', {data: response}); 
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.headerImageContainer}>
                        <Image style={styles.headerImage} source={{uri: data.image}} />
                    </View>
                    <View style={styles.headerText}>
                        <Text style={styles.headerTitle}>Hi {data.name}</Text>
                        <Text style={styles.headerSubTitle}>Have agreat day a head</Text>
                    </View>
                </View>
                <Icon name="arrow-left" size={20} color="black" onPress={() => navigation.goBack()} />
            </View>
            <Text style={styles.title}>
              {action === 'add' ? 'ADD YOUR JOB' : 'EDIT YOUR JOB'}
            </Text>

            <View style={styles.inputContainer}>
              <Image source={require('../assets/Frame.png')} style={{width: 24, height: 24}}/>
              <TextInput style={styles.textInput}
                value={newJob}
                placeholder='Input your job'
                onChangeText={newText => setNewJob(newText)}
              />
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={handleFinish}>
              <Text style={styles.buttonText}>
                FINISH
              </Text>
              <Icon name="arrow-right" size={20} color="white" />
            </TouchableOpacity>

            <View style={styles.logo}>
              <Image source={require('../assets/Image95.png')} style={{width: 190, height: 170}}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: StatusBar.currentHeight || 0
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
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginTop: 60
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: 'rgba(144, 149, 160, 1)',
      padding: 8,
      marginTop: 60,
      width: '80%'
    },
    textInput: {
      fontSize: 14,
      marginLeft: 5,
      width: '80%'
    },
    buttonContainer: {
      backgroundColor: 'rgba(0, 189, 214, 1)',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 18,
      marginTop: 60,
      width: '40%'
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      marginRight: 2,
    },
    logo: {
      marginTop: 80, 
      marginBottom: 50
    }
});

export default AddJobScreen;