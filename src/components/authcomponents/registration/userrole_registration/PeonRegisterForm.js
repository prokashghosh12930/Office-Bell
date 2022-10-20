import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { Styles } from "../../common/styles/styles";
import CustomView from "../../common/CustomView";
import FormButton from "./common/FormButton";

function PeonregisterForm(props) {
  return (
    <View style={Styles.bodyContainer}>
      <Text style={Styles.firstInput}>Name of Peon</Text>
      <CustomView>
        <TextInput
          style={Styles.textinputStyle}
          autoCapitalize="none"
          keyboardType="default"
          autoCorrect={false}
          underlineColorAndroid="transparent"
        />
        <Image
          style={Styles.ImageStyle}
          source={require("../../../../assets/images/png/Employeeicon/Employeeicon2x.png")}
        />
      </CustomView>

      <Text style={Styles.inputField}>Peon Phone Number</Text>
      <CustomView>
        <View style={Styles.childStyle}>
          <TextInput
            style={Styles.contactTextinput}
            maxLength={10}
            keyboardType="phone-pad"
            autoCorrect={false}
          />
          <View style={Styles.contactText}>
            <Image
              style={Styles.downArrow}
              source={require("../../../../assets/images/png/downarrow/downarrow.png")}
            />
            <Text style={Styles.inputStyle}>+91</Text>
          </View>
        </View>
        <Image
          style={Styles.ImageStyle}
          source={require("../../../../assets/images/png/Contacticon/Contacticon2x.png")}
        />
      </CustomView>

      <Text style={Styles.inputField}>Company Phone Number</Text>
      <CustomView>
        <View style={Styles.childStyle}>
          <TextInput
            style={Styles.contactTextinput}
            maxLength={10}
            keyboardType="phone-pad"
            autoCorrect={false}
          />
          <View style={Styles.contactText}>
            <Image
              style={Styles.downArrow}
              source={require("../../../../assets/images/png/downarrow/downarrow.png")}
            />
            <Text style={Styles.inputStyle}>+91</Text>
          </View>
        </View>
        <Image
          style={Styles.ImageStyle}
          source={require("../../../../assets/images/png/Contacticon/Contacticon2x.png")}
        />
      </CustomView>

      <FormButton />
    </View>
  );
}

export default PeonregisterForm;
