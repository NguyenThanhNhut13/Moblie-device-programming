import React from "react";
import { useState, useEffect } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ChatScreen = () => {
    // const DATA = [
    //     { "id": '1', "title": 'Cà nấu lẩu, nấu mì mini...', "shop": 'Shop Devang', "image": 'https://s3-alpha-sig.figma.com/img/1d15/3514/89d1f4c98a08c53fb568891607347040?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F5dPPTbUst~kHPzMPDnVD~~i8pBVVLNjIR6XjyUXCIoAy2D3zUWPQjSlVZdKnDwX08PS04~QRl4J0eLlX4VkVyCNHEkZ0Nxj9bfGiVwj4WxPJEI9XvvJ-ECheFb0-FlYlpyqEKsb3RQ1rSv0E73OWSBjpa02bmSOHJAAhCvnMF-NtuKV-kDmmT2glW8yfzS9u98uIyxs8svIG-ESAkUU9MCT66hRHVRK6XB5c~Mqj8-rJ0gOvxicb2xsZE4xSgEJNGAUyKuHNjPfQaTyf5VmeysWqREYoXxgYVfZ14gOL5NcKQ2nPdjKliRnc~wkLrqazdDEcE-Smh0f-ElS6e~gTg__'},
    //     { "id": '2', "title": '1KG KHÔ GÀ BƠ TỎI ...', "shop": 'Shop LTD Food', "image": 'https://s3-alpha-sig.figma.com/img/9949/f5a2/338eb97e0752d7d1bd66b35ca4e36b72?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCjEueb8iMWXaCOazyNkKxw5w6Ca-HPn3CaF24395S95Uo5CRbjnunCpf0CR1iBZrkle9uY~c8W22vfSYaT3UChNddweW~mMJRxLCWAIlFdJDRn55yEKnssmVg-d0hyb8NKVM4PuNIwLm6y8PMITK5TUj4NAd6pl~WvrRnTekSFTypVmsvWLQySxTklAXOoVISA8AFJDp1OrHjCWHEpY8Mnln6sT-oio3YVCRtBzQ-JEAJenObwGqRVhNOwmDJoFxJk7Q-LA5a~lmyJhwo4c1k8qrYm3hactSWAVoR7YXstNbIjha3cG4mcVDnEg79Zh~xkY4iFOaux1cXaPfAa5mw__' },
    //     { "id": '3', "title": 'Xe cần cẩu đa năng', "shop": 'Thế giới đồ chơi', "image": 'https://s3-alpha-sig.figma.com/img/57ef/f7ae/0ff9ff2dc335c0af424deccb31ed6ba6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g7quv7IFBj5TvDPShC0CSbfaGF54X6YTcJ8hUGrpzout0wRes9ZVvT67stONONe4JY1VQmlwQzU8IOPX2F3hAdB5xT5s3Z1ZSSlh9n87fr5iwCnQluriksXi3p~8mhirp-ocpeJbPr7gMqiagS2vRRQQHN12O-4B19UQkX8asIMS4trIWA4GXUB50q0tdwn2MzwEMGjituuURi9ONOf4mFMsBaMa3XgEO0e5p9uHW-UN8Zv~9DEojnmoY-PK49t1SPcYHWyoRM3a4S7mPryc4vc9SefhITfeeHl1vA5jo9ZDS66LIywd2JaBtLLbsGe5PWY8euu2JQuOLRhzkpuG8w__' },
    //     { "id": '4', "title": 'Đồ chơi dạng mô hình', "shop": 'Thế giới đồ chơi', "image": 'https://s3-alpha-sig.figma.com/img/43af/dbc7/1b8ba3fabe412c960fafda92f944bc99?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JSuvZkLjkmh2yFJQbOcsUg0nQ90D6m~2Vthw6PUTcB6A65D6CgjHyMo~dNB-e~nQ7EfX-OGgXmAziJU-ljnUsMvKSChJsjyvNAfJ4Q29m4esjR0H2vytYKF31UuwotA373WbRREMJGThKyENKA6PGTwZbuJ~p7M4LNnQMFNmkXWsAiayz6WsLmfQaitbIJq9R0pzIu7~acpcD4PLZ07a-RpimuG2LvqLrEYqQxV6ZBNtw8X-76ZaJxPa-UEv7qsacyerSsDfuGfKqkgLaDidGcMbEFpGP~Z~qFZ0wdUbRRYgXatgCHOuE6AR3H7XgrYrGcLuM1UA8unKW8FVVoHNXw__' },
    //     { "id": '5', "title": 'Lãnh đạo giản đơn', "shop": 'Minh Long Book', "image": 'https://s3-alpha-sig.figma.com/img/8556/8487/dc854fa829d1b54315dd99bec7b2d68b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bzZ1IBOnnq9si4PJzYYI2h-ginkt-no6xEHG7cxihZPpxj1Z9mNXazdSck87rqsPzopXH1HkrJysyvZzdS29Mpt0kVl49QpjpSmwFydbyPtjx2VrhIcs1ZFCwL437v3i3Yqn3NhdTbs5ErShHV0mrfmFYTOxBVs9UgWyqDsF8UdQf31ttysd1eJF4R160SHvM3QgArmMGtOfhzxbiXVQBfEupOX6YgKB3izR8t05raM-eiJci4MK7qk8ZwytLZ7C4PH2Y9~RK0fKBIMm1xGdNnAlCbL8gWHld6k0IRyrgobJxtvwjqZMB0IiSyifFMty9DwF3zyp1VHHqVugUBo4Ng__' },
    //     { "id": '6', "title": 'Hiểu lòng con trẻ', "shop": 'Minh Long Book', "image": 'https://s3-alpha-sig.figma.com/img/c8c9/8ce6/979c72e4afba69217c666d47e7f3dafe?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EaEU6mhcWSaPCFjGDNk2kLyUyF2qSXgezyHUvbGLoHbVBXZ-WX1jkibXnw2qWDsD5TvTYuzgpFh0Jk~oFMfgo2~xMzcEWEJuMOLqiA4piu~Ao1P9DmDAmm1wLrKuA7lq1IdglycGUA7X4431Vxc2QcY5IIDXtPIWQAFx7mtHeaV4fCUtxQ~qnX-0-iXs7I~cjq1cUg5JCUS0utmBg4peV7KT4Tp8SRqUphD-idxeO07u1dBh2dazCK9lKsXnXiF5r184GxfdgZb8QMtRX9iUuzafsC9lG3vgSArrFD1-aYCG~kGYT3W24H3GZ2KnVLPcVhkd5U76vkLrABroG6Bo8A__' },
    // ]

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
                <TouchableOpacity>
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