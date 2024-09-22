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
      <View style={styles.container1}>
        <View style={styles.header}>
          <Image source={require("./assets/book.png")} />
          <View style={styles.headerright}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 8 }}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "rgba(238, 13, 13, 1)",
                marginTop: 9,
              }}
            >
              {totalPrice.toLocaleString()} đ
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#808080",
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
                textDecorationColor: "#808080",
                marginTop: 9,
              }}
            >
              {totalPrice.toLocaleString()} đ
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 9,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={decreaseCount}
                >
                  {/* <Image style={{}} source={require("./assets/btnminus.png")} /> */}
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={{ marginLeft: 10 }}>{count}</Text>
                <TouchableOpacity
                  onPress={increaseCount}
                >
                  {/* <Image
                    style={{ marginLeft: 10 }}
                    source={require("./assets/btnadd.png")}
                  /> */}
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "rgb(75, 118, 240)",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginTop: 3.5,
                }}
              >
                Mua sau
              </Text>
            </View>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 20,marginBottom:-10 }}>
          <Text style={{ fontSize: 12, fontWeight: "bold", marginLeft: 19 }}>
            Mã giảm giá đã lưu
          </Text>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 12,
              fontWeight: "bold",
              color: "rgb(49, 81, 217)",
              marginLeft: 33,
            }}
          >
            Xem tại đây
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 180,
          height: 30,
        }}
      >
        <View style={{ borderWidth: 1, width: 188 }}>
          {/* <Image
            style={{ position: "absolute", left: 13, bottom: 9 }}
            source={require("./assets/yellow_block.png")}
          /> */}
          <View style={{backgroundColor:'yellow'}}></View>
          <Text style={{ textAlign: "center", marginLeft: 10 }}>
            Mã giảm giá
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            right: 15,
            backgroundColor: "rgb(10, 94, 184)",
            height: 30,
            width: 80,
            borderRadius:1,
          }}
        >
          <Text
            style={{
              color: "hsl(0, 0%, 100%)",
              
              fontWeight: "bold",
              textAlign: "center",
              position: "absolute",
              top: 5,
              left: 15,
              
            }}
          >
            Áp dụng
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "rgb(197, 196, 196)",
          height: 13,
          marginTop: 20,
          marginRight: 10,
        }}
      ></View>
      <View style={[styles.container2, { marginTop: 15 }]}>
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text
          style={{ fontSize: 12, color: "rgb(8, 97, 196)", marginLeft: 15 }}
        >
          Nhập tại đây
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "rgb(197, 196, 196)",
          height: 13,
          marginTop: 20,
          marginRight: 10,
        }}
      ></View>
      <View style={[styles.container3, { marginTop: 10 }]}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Tạm tính</Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "rgb(229, 57, 53)",
            marginRight: 45,
          }}
        >
          {totalPrice.toLocaleString()} đ
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "rgb(197, 196, 196)",
          height: 100,
          marginTop: 20,
          marginRight: 10,
          marginBottom: 30,
        }}
      ></View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 43,
        }}
      >
        <Text>Thành tiền</Text>
        <Text style={{fontSize: 15,
                fontWeight: "bold",
                color: "rgba(238, 13, 13, 1)",}} >{totalPrice.toLocaleString()} đ</Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "rgb(229, 57, 53)",
            width: 335,
            height: 40,
            borderRadius: 5,
            marginLeft: 3,
            marginTop: 20,
            marginRight: 10,
            
          }}
        >
          <Text
            style={{
              color: "hsl(0, 0%, 100%)",
              textAlign: "center",
              marginTop: 10,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
  },
  container1: {
    flex: 1,

    marginTop: 20,
    marginLeft: -20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 0,
    flexDirection: "row",
  },
  container3: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
  },
  container4: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
