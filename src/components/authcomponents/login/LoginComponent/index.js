import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Styles } from "../../common/styles/styles";
import { OwnStyles } from "./styles";
import CustomView from "../../common/CustomView";

function LoginComponent(props) {
  const navigation = useNavigation();

  return (
    <View style={OwnStyles.bodyContainer}>
      <Text style={Styles.firstInput}>Enter your Phone Number</Text>
      <CustomView>
        <View style={Styles.childStyle}>
          <TextInput
            style={Styles.contactTextinput}
            maxLength={10}
            keyboardType="phone-pad"
            autoCorrect={false}
          />
          <View style={Styles.contactText}>
            <Image
              style={Styles.downArrow}
              source={require("../../../../assets/images/png/downarrow/downarrow.png")}
            />
            <Text style={Styles.inputStyle}>+91</Text>
          </View>
        </View>
        <Image
          style={Styles.ImageStyle}
          source={require("../../../../assets/images/png/Contacticon/Contacticon2x.png")}
        />
      </CustomView>
      <TouchableOpacity
        style={OwnStyles.buttonStyle}
        onPress={() => navigation.navigate("otp")}
      >
        <Text style={OwnStyles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <View style={OwnStyles.textContainer}>
        <Text style={Styles.registerText}>Do you have any registration</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={OwnStyles.registerTextStyle}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginComponent;
