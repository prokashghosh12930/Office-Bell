import React, { useState } from "react";
import { View, Text, Modal, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const CustomProgressBar = (props) => {
  const [modalFlag, setModalFlag] = useState(true);
  const closeModal = () => {
    setModalFlag(false);
  };
  return (
    <View>
    <Modal
      onRequestClose={modalFlag}
      animationType={"fade"}
      visible={modalFlag}
      transparent={true}
    >
      <View style={styles.progressBackground}>
        <View style={styles.successBoxStyle}>
          <Image
            style={styles.doneIconStyle}
            source={require("../../assets/images/png/doneIcon/Doneicon.png")}
          />
          <Text style={styles.RequiestdoneTextColor}>{props.title}</Text>
          <View style={styles.subtitlsText}>
            <Text>{props.subTitleOne}</Text>
            <Text>{props.subTitleTwo}</Text>
          </View>
          <TouchableOpacity style={styles.okButtonStyle} onPress={closeModal}>
            <Text style={styles.okTextColorSize}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </View>
  );
};
export default CustomProgressBar;
