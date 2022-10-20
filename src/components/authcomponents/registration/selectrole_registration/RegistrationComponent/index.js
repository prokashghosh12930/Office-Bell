import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Styles } from "./styles";
import role from "../../../../../constant/RegisterRole";

function RegistrationComponent(props) {
  const navigation = useNavigation();

  const [active, setActive] = useState(0);

  const handleClickItem = (id) => {
    setActive(id);
  };

  const onSubmit = () => {
    switch (active) {
      case 1:
        navigation.navigate("companyregister");
        break;
      case 2:
        navigation.navigate("employeeregister");
        break;
      case 3:
        navigation.navigate("peonregister");
        break;
      default:
        null;
    }
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.index}
        data={role}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              Styles.SectionBox,
              {
                backgroundColor: item.index == active ? "#EDF8FE" : "#FFFFFF",
              },
            ]}
            onPress={() => handleClickItem(item.index)}
          >
            <View style={Styles.imageContainer}>
              <Image source={item.image} style={Styles.ImageStyle} />
            </View>
            <Text style={Styles.inputText}>Register as {item.role_text}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={Styles.buttonStyle} onPress={onSubmit}>
        <Text style={Styles.buttonText}>Next</Text>
        <Image
          style={Styles.buttonImage}
          source={require("../../../../../assets/images/png/arrowbutton/arrowbutton3x.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

export default RegistrationComponent;
