import { StyleSheet, Text, View } from 'react-native';

const AddJobScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Add Job Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AddJobScreen;