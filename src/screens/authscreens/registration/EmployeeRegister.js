import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Styles } from "../common/styles/styles";
import HeaderImage from "../../../components/authcomponents/common/HeaderImage";
import FooterSection from "../../../components/authcomponents/common/FooterSection";
import EmployeeregisterForm from "../../../components/authcomponents/registration/userrole_registration/EmployeeRegisterForm";
import { SafeAreaView } from "react-native-safe-area-context";

function EmployeeregisterScreen(props) {
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <HeaderImage />
      <Text style={Styles.textStyle}>Register as an Employee</Text>
      <TextInput
        style={Styles.underlineStyle}
        underlineColorAndroid={"#333232"}
      />
      <EmployeeregisterForm />
      <FooterSection />
    </SafeAreaView>
  );
}

export default EmployeeregisterScreen;
