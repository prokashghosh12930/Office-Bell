import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Styles } from "../common/styles/styles";
import HeaderImage from "../../../components/authcomponents/common/HeaderImage";
import FooterSection from "../../../components/authcomponents/common/FooterSection";
import PeonregisterForm from "../../../components/authcomponents/registration/userrole_registration/PeonRegisterForm";
import { SafeAreaView } from "react-native-safe-area-context";

function PeonregisterScreen(props) {
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <HeaderImage />
      <Text style={Styles.textStyle}>Register as a Peon</Text>
      <TextInput
        style={Styles.underlineStyle}
        underlineColorAndroid={"#333232"}
      />
      <PeonregisterForm />
      <FooterSection />
    </SafeAreaView>
  );
}

export default PeonregisterScreen;
