import React, {useState, useEffect } from "react";
import { ProgressCircle } from "react-native-material-indicators";
//import OtpScreen from "../../../../../../screens/authscreens/common/OtpScreen";
import { CommonActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Modal } from "react-native";
import styles from "./styles";
const RegistrationLoader = (props) => {
  const [modalFlag, setModalFlag] = useState(true);
  //const [isProgress, setIsProgress] = useState(false);
  const navigation = useNavigation();
  // const showSuccessMessage = () => {
  //   setIsProgress(true);
  // };
  // setTimeout(showSuccessMessage, 5000);
  let id = 0;
  useEffect(() => {
     id = setTimeout(() => {
      navigation.dispatch(
        CommonActions.navigate({
          name: "otp",
        })
      );
      setModalFlag(false);
      clearTimeout(id);
    }, 2000);
  }, []);

  return (
    <Modal onRequestClose={() => null} transparent={true} visible={modalFlag}>
      <View style={styles.progressBackground}>
        <View style={styles.progressBoxStyle}>
          <Text style={styles.headerOfLoader}>{props.title}</Text>
          <View style={styles.activtyIndicatorStyle}>
            <ProgressCircle
              value={100}
              size={48}
              thickness={1}
              color="#017BFD"
              animationMethod="timing"
              animationConfig={{ duration: 2000 }}
              shouldAnimateFirstValue
              determinate
            />
          </View>
          <Text style={styles.loaderBoxTextStyle}> {props.firstSubtitle} </Text>
          <Text style={styles.loaderBoxTextStyle}>{props.secondSubtitle}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default RegistrationLoader;
