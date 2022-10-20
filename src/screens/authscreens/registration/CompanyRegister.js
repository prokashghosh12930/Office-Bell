import React from "react";
import { View, Text, TextInput } from "react-native";
import { Styles } from "../common/styles/styles";
import HeaderImage from "../../../components/authcomponents/common/HeaderImage";
import FooterSection from "../../../components/authcomponents/common/FooterSection";
import CompanyRegisterForm from "../../../components/authcomponents/registration/userrole_registration/CompanyRegisterForm";
import { SafeAreaView } from "react-native-safe-area-context";

function CompanyregisterScreen(props) {
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <HeaderImage />
      <Text style={Styles.textStyle}>Register as a Company</Text>
      <TextInput
        style={Styles.underlineStyle}
        underlineColorAndroid={"#333232"}
      />
      <CompanyRegisterForm />
      <FooterSection />
    </SafeAreaView>
  );
}

export default CompanyregisterScreen;
