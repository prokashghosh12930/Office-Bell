import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
const DeleteAllButton = ({ deleteAll }) => {
  // const deleteAll = props;
  return (
    <TouchableOpacity style={styles.redButton} onPress={deleteAll}>
      <Text style={styles.deleteAllTextColor}>Delete All</Text>
    </TouchableOpacity>
  );
};
export default DeleteAllButton;
