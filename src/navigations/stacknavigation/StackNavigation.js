import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/HomeScreen";
import RegistrationScreen from "../../screens/authscreens/registration/RegistrationScreen";
import CompanyregisterScreen from "../../screens/authscreens/registration/CompanyRegister";
import EmployeeregisterScreen from "../../screens/authscreens/registration/EmployeeRegister";
import PeonregisterScreen from "../../screens/authscreens/registration/PeonRegister";
import LoginScreen from "../../screens/authscreens/LoginScreen";
import OtpScreen from "../../screens/authscreens/common/OtpScreen";
import EmployeeListScreen from "../../screens/EmployeeListScreen";
import CategoryScreen from "../../screens/CategoryScreen";
import TodoListScreen from "../../screens/TodoListScreen";

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="selectregister"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="companyregister"
          component={CompanyregisterScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="employeeregister"
          component={EmployeeregisterScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="peonregister"
          component={PeonregisterScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="otp"
          component={OtpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="EmployeeList"
          component={EmployeeListScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Category"
          component={CategoryScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Todolist"
          component={TodoListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;
