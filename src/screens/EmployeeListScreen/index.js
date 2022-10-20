import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoutButton from "../../components/LogoutButton";
import EmployeeNameList from "../../constant/EmployeeNameList";
import PeoneNameList from "../../constant/PeoneNameList.json"
import styles from "./styles";

const EmployeeListScreen = () => {
  const [ list, setList ] = useState(EmployeeNameList.Data);
  const [flag, setFlag ] = useState(1);
  const removeValue = (id) => {
    let newData = list.filter((item) => item.index != id);
    setList(newData);
  };
  const colorChange = () =>{
    if(flag == 0){
      setFlag(1);
      setList(EmployeeNameList.Data);
    } else {
      setFlag(0);
      setList(PeoneNameList.Data);
    }
  }
  return (
    <SafeAreaView>
    <View style={styles.parentSize}>
      <View style={styles.topChildView}>
        <TouchableOpacity style={styles.buttonBackgroundColor}>
          <TouchableOpacity style={[styles.blueButtonColor,
          {
            backgroundColor: flag?"#017BFD":"#EDF8FE",
          }
          ]}
          onPress = {() => colorChange()}>
            <Text style={[{ color:flag?"#FFFFFF":"#017BFD"}]}>Employee</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.blueButtonColor,
          {
            backgroundColor: flag?"#EDF8FE":"#017BFD",
          }
          ]}
          onPress = {() => colorChange()}>
            <Text  style={[{ color:flag?"#017BFD":"#FFFFFF"}]}>   Peon    </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={styles.childView}>
        <FlatList
          data={list}
          ListHeaderComponent={() =>
          !list.length ? (
            <Text style={styles.emptyMessageStyle}>The list is empty</Text>
          ) : null
        }
        renderItem={({ item }) => (
          <View style={styles.boxView}>
            <Text style={styles.listTextStyle}>
              Employee Name: {item.name}
              {"\n"}Employee Number:{item.number}
            </Text>
            <TouchableOpacity
              onPress={() =>removeValue(item.index)}
              style={styles.roundButton1}
            >
            <Image source={require('../../assets/images/png/CrossIcon.png')}/>
            </TouchableOpacity>
          </View>
        )}
          />
      </View>
      <LogoutButton />
    </View>
    </SafeAreaView>
  );
};

export default EmployeeListScreen;
