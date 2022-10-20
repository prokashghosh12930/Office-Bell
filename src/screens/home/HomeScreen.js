import React from "react";
import { View } from "react-native";
import RegistrationScreen from "../authscreens/registration/RegistrationScreen";
import CompanyregisterScreen from "../authscreens/registration/CompanyRegister";
import EmployeeregisterScreen from "../authscreens/registration/EmployeeRegister";
import OtpScreen from "../authscreens/common/OtpScreen";
import LoginScreen from "../authscreens/LoginScreen";
import PeonregisterScreen from "../authscreens/registration/PeonRegister";
import EmployeeListScreen from "../EmployeeListScreen";
import CategoryScreen from "../CategoryScreen";
import TodolistScreen from "../TodoListScreen";

import Registration1 from "../../components/authcomponents/registration/Registration1";

function HomeScreen({ navigation }) {
  return (
    <View>
      {/* <Registration1 /> */}

      {/* <PeonregisterScreen /> */}
      {/* <EmployeeregisterScreen /> */}
      {/* <OtpScreen /> */}
      <RegistrationScreen />
      {/* <CompanyregisterScreen /> */}
      {/* <LoginScreen /> */}
      {/* <EmployeeListScreen/> */}
      {/* <CategoryScreen/> */}
      {/* <TodolistScreen/> */}
    </View>
  );
}
export default HomeScreen;
