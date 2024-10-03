import React from "react";
import { useState, useEffect } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ChatScreen = ({navigation}) => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch('https://64590e428badff578e02d387.mockapi.io/test');
            const json = await response.json();
            setData(json);
            setLoading(false); 
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({item}) => {
        return  (
            <View style={styles.chatItem}>
                <Image source={{uri: item.image}} style={styles.chatItemImage} />
                <View style={styles.chatItemContent}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemShop}>{item.shop}</Text>
                </View>
                <TouchableOpacity style={styles.chatButton}>
                    <Text style={styles.chatButtonText}>Chat</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/back.png')} style={styles.backButton} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Chat</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/bi_cart-check.png')} style={styles.cartButton} />
                </TouchableOpacity>
            </View>

            <Text style={styles.infoText}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>

            {isLoading ? 
                    <Text>Loading...</Text> 
                    : (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            )}

            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../assets/Group 10.png')} style={styles.backButton} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/Vector.png')} style={styles.homeButton} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/Vector 1 (Stroke).png')} style={styles.cartButton} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        backgroundColor: '#1BA9FF'
    },
    backButton: {
        width: 24,
        height: 24,
    },
    headerTitle: {
        fontSize: 16,
        color: '#fff',
    },
    cartButton: {
        width: 24,
        height: 24,
        marginRight: 8
    },
    infoText: {
        fontSize: 15,
        color: '#333',
        margin: 10
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    chatItemImage: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    chatItemContent: {
        marginHorizontal: 10,
    },
    itemTitle: {
        fontSize: 16,
    },
    itemShop: {
        color: '#666'
    },
    chatButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F31111',
        borderRadius: 5
    },
    chatButtonText: {
        fontSize: 16,
        color: '#fff'
    },
    
    homeButton: {
        width: 24,
        height: 24,
    },


});

export default ChatScreen;