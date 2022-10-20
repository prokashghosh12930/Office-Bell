import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Styles } from "../common/styles/styles";
import RegistrationComponent from "../../../components/authcomponents/registration/selectrole_registration/RegistrationComponent";
import { SafeAreaView } from "react-native-safe-area-context";

function RegistrationScreen(props) {
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <Text style={styles.textStyle}>Registration</Text>
      <TextInput
        style={Styles.underlineStyle}
        underlineColorAndroid={"#333232"}
      />
      <Text style={styles.roleStyle}>Select your role</Text>
      <RegistrationComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    paddingHorizontal: "8%",
    paddingTop: "15%",
    color: "#333232",
    fontSize: 28,
  },
  roleStyle: {
    display: "flex",
    fontSize: 14,
    color: "#017BFD",
    textAlign: "center",
    paddingTop: "4%",
  },
});
export default RegistrationScreen;
