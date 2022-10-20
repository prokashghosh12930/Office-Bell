import React from "react";
import { View, Text, TextInput } from "react-native";
import { Styles } from "./common/styles/styles";
import HeaderImage from "../../components/authcomponents/common/HeaderImage";
import FooterSection from "../../components/authcomponents/common/FooterSection";
import LoginComponent from "../../components/authcomponents/login/LoginComponent";
import { SafeAreaView } from "react-native-safe-area-context";

function LoginScreen(props) {
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <HeaderImage />
      <Text style={Styles.textStyle}>Log In</Text>
      <TextInput
        style={Styles.underlineStyle}
        underlineColorAndroid={"#333232"}
      />
      <LoginComponent />
      <FooterSection />
    </SafeAreaView>
  );
}

export default LoginScreen;
