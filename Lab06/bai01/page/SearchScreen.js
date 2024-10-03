import React, {useState, useEffect} from 'react';
import {TextInput, TouchableOpacity, SafeAreaView, Text, View, FlatList, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchScreen = ({navigation}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [badgeCount, setBadgeCount] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://64590e428badff578e02d387.mockapi.io/products');
                if (!response.ok) {
                throw new Error('Failed to fecth data!');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    const renderItem = ({item}) => {
        return  (
            <View style={styles.searchItem}>
                {
                    loading ? <Text>Loading...</Text> : error ? <Text>{error}</Text> : (
                        <>
                            <Image source={{uri: item.image}} style={styles.searchItemImage}/>
                            <Text style={styles.searchItemTitle} numberOfLines={2}>{item.title}</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
                                {
                                    [...Array(5)].map((_, index) => {
                                        if (index < item.rating) {
                                            return <Image key={index} source={require('../assets/Star.png')} style={styles.starIcon}/>
                                        } else {
                                            return <Image key={index} source={require('../assets/NonStar.png')} style={styles.starIcon}/>
                                        }
                                    })
                                }
                                <Text style={styles.searchItemRatingNumber}>(15)</Text>
                            </View>
                            <View style={styles.searchItemPriceContainer}>
                                <Text style={styles.searchItemPrice}>{item.price}</Text>
                                <Text style={styles.searchItemDiscount}>-{item.discount}</Text>
                            </View>        
                        </>
                    )
                }
            </View>
            )
        }

    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={24} color="#fff" />
                    </TouchableOpacity>
                    <View style={styles.searchBar}>
                        <Icon name="search" size={24} color="#000" />
                        <TextInput placeholder="Dây cáp USB" style={styles.textInput}/>
                    </View>
                    <TouchableOpacity>
                        <Icon name="shopping-cart" size={24} color="#fff" />
                        {badgeCount > 0 && 
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}>{badgeCount}</Text>
                            </View>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="more-horizontal" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            
                <FlatList 
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />

                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Icon name="menu" size={24} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="home" size={24} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/Vector 1 (Stroke).png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SearchScreen;

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        marginTop: 40
    },
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        justifyContent: 'center',
    },     
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        backgroundColor: '#1BA9FF'
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 5,
        width: '60%',
        paddingHorizontal: 10
    },
    textInput: {
        marginStart: 8,
        width: '100%',
    },
    badge: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: -10,
        top: -10
    },
    badgeText: {
        color: '#fff'
    },

    searchItem: {
        width: '47%',
        margin: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    searchItemImage: {
        width: '100%',
        height: 180,
        borderRadius: 10
    },
    searchItemTitle: {
        fontSize: 15,
        color: '#333',
        margin: 10,
    },
    starIcon: {
        width: 20,
        height: 20,
        
    },
    searchItemRatingNumber: {
        fontSize: 14,
        marginHorizontal: 10
    },
    searchItemPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchItemPrice: {
        fontSize: 16,
        color: '#333',
        margin: 10,
        fontWeight: 'bold'
    },
    searchItemDiscount: {
        fontSize: 14,
        color: '#969DAA',
        marginHorizontal: 10
    },        

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        backgroundColor: '#1BA9FF'
    }
});