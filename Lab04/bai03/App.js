import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from "react-native";

export default function App() {
  const pricePerItem = 141800
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(pricePerItem);
  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
    setTotalPrice((prevPrice) => prevPrice + pricePerItem);
  };
  const decreaseCount = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
    setTotalPrice((prevPrice) => Math.max(prevPrice - pricePerItem, 0));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bookInfoContainer}>
        <View style={styles.bookInfo}>
          <Image source={require("./assets/book.png")} style={styles.bookImage}/>
          <View style={styles.bookDetail}>
            <Text style={styles.bookTitle}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.bookSupplier}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.bookPrice}>{totalPrice.toLocaleString()} đ</Text>
            <Text style={styles.bookOldPrice}>{totalPrice.toLocaleString()} đ</Text>

            <View style={styles.bookCount}>
              <View style={styles.bookCountControl}>
                <TouchableOpacity onPress={decreaseCount}>
                  <Image source={require("./assets/btnminus.png")} />
                </TouchableOpacity>
                <Text style={styles.bookCountText}>
                  {count}
                </Text>
                <TouchableOpacity onPress={increaseCount}>
                  <Image source={require("./assets/btnadd.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.bookBuyLater}>Mua sau</Text>
            </View>
          </View>
        </View>

        <View style={styles.discount}>
          <Text style={styles.discountTitle}>Mã giảm giá đã lưu</Text>
          <Text style={styles.discountLink}>Xem tại đây</Text>
        </View>

        <View style={styles.discountChoose}>
          <View style={styles.discountChooseBlock}>
            <Image source={require("./assets/yellow_block.png")} />
            <Text style={styles.discountTitleText}>Mã giảm giá</Text>
          </View>
          <TouchableOpacity style={styles.discountChooseApply}>
            <Text style={styles.discountChooseApplyText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.gift}>
        <Text style={styles.giftTitle}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={styles.giftLink}>Nhập tại đây</Text>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.total}>
        <Text style={styles.totalTitle}>Tạm tính</Text>
        <Text style={styles.totalPrice}>{totalPrice.toLocaleString()} đ</Text>
      </View>

      <View style={styles.divider}></View>

      <View style={styles.total}>
        <Text style={styles.totalTitle}>Thành tiền</Text>
        <Text style={styles.totalPrice}>{totalPrice.toLocaleString()} đ</Text>
      </View>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  bookInfoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  bookInfo: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 10
  },
  bookImage: {
    width: 130,
    height: 170
  },
  bookDetail: {
    marginLeft: 20,
    marginTop: 5
  },
  bookTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  bookSupplier: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 20
  },
  bookPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    color: 'red'
  },
  bookOldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#808080',
    fontWeight: 'bold',
    marginTop: 10
  },
  bookCount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12
  },
  bookCountControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  bookCountText: {
    fontSize: 15,
    marginHorizontal: 10,
    fontWeight: 'bold'
  },
  bookBuyLater: {
    fontSize: 12,
    color: '#134FEC',
    marginTop: 10,
    fontWeight: 'bold'
  },
  discount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginBottom: 10
  },
  discountTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  discountLink: {
    fontSize: 12,
    color: '#134FEC',
    fontWeight: 'bold',
    marginLeft: 20
  },
  discountChoose: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10
  },
  discountChooseBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginVertical: 20
  },
  discountTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 30
  },
  discountChooseApply: {
    backgroundColor: '#0A5EB7',
    padding: 10,
    borderRadius: 5
  },
  discountChooseApplyText: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    fontSize: 20
  },
  


  
});
