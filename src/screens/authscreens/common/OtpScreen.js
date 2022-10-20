import React from "react";
import { View } from "react-native";
import { Styles } from "./styles/styles";
import OtpComponent from "../../../components/authcomponents/common/OtpComponent";
import { SafeAreaView } from "react-native-safe-area-context";

function OtpScreen(props) {
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <OtpComponent />
    </SafeAreaView>
  );
}
export default OtpScreen;
