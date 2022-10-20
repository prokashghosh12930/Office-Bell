import React, {useState} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RegistrationLoader from "../RegistrationLoader";
import { useNavigation } from "@react-navigation/native";
import { Styles } from "./styles";

function FormButton(props) {
  const navigation = useNavigation();
  const [isProgress, setIsProgress] = useState(false);
  const openProgressbar = () => {
    setIsProgress(true);
  };
  return  isProgress ? (
    <RegistrationLoader
      title="Registration"
      firstSubtitle="Registering your company,"
      secondSubtitle="Please wait..."
    />
  ) : (
    <View>
      <TouchableOpacity
        style={Styles.buttonStyle}
        onPress={openProgressbar}
      >
        <Text style={Styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <Text style={Styles.registerText}>Already Register</Text>
      </TouchableOpacity>
    </View>
  );
}
export default FormButton;

//() => navigation.navigate("otp")