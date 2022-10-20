import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Styles } from "./styles";

function OtpComponent(props) {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={Styles.textStyle}>
        Enter 4 digits verification code sent to your mobile number
      </Text>
      <View style={Styles.boxContainer}>
        <View style={Styles.boxStyle}>
          <TextInput
            keyboardType="phone-pad"
            maxLength={1}
            style={Styles.boxText}
          />
        </View>
        <View style={Styles.boxStyle}>
          <TextInput
            keyboardType="phone-pad"
            maxLength={1}
            style={Styles.boxText}
          />
        </View>
        <View style={Styles.boxStyle}>
          <TextInput
            keyboardType="phone-pad"
            maxLength={1}
            style={Styles.boxText}
          />
        </View>
        <View style={Styles.boxStyle}>
          <TextInput
            keyboardType="phone-pad"
            maxLength={1}
            style={Styles.boxText}
          />
        </View>
      </View>
      <Text style={Styles.text}>Enter OTP here</Text>
      <TouchableOpacity
        style={Styles.buttonStyle}
        onPress={() => navigation.navigate("EmployeeList")}
      >
        <Text style={Styles.buttonText}>Submit</Text>
        <Image
          style={Styles.buttonImage}
          source={require("../../../../assets/images/png/arrowbutton/arrowbutton3x.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default OtpComponent;
