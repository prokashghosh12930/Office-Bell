import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Styles } from "./styles";

function HeaderImage(props) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={Styles.imageContainer}
        onPress={() => navigation.navigate("selectregister")}
      >
        <Image
          style={Styles.headerarrow}
          source={require("../../../../assets/images/png/arrow1/arrow13x.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default HeaderImage;
