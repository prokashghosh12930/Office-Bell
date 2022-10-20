import React from "react";
import { View, Text, Image } from "react-native";
import { Styles } from "./styles";

function FooterSection(props) {
  return (
    <View style={Styles.logoContainer}>
      <Text style={Styles.text}>Powered by</Text>
      <Image
        style={Styles.logoImage}
        source={require("../../../../assets/images/png/Vyrazu-1/Vyrazu-13x.png")}
      />
    </View>
  );
}

export default FooterSection;
