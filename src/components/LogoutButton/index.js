import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
const LogoutButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Category")}
      style={styles.logOut}
    >
      <Image
        style={styles.imageSet}
        source={require("../../assets/images/png/Logouticon/Logouticon.png")}
      />
      <Text style={styles.logoutTextColor}>Log out</Text>
    </TouchableOpacity>
  );
};
export default LogoutButton;
