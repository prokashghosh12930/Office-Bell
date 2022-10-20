import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { Styles } from "../../common/styles/styles";
import CustomView from "../../common/CustomView";
import FormButton from "./common/FormButton";

function CompanyRegisterForm(props) {
  return (
    <View style={Styles.bodyContainer}>
      <Text style={Styles.firstInput}>Company Name</Text>
      <CustomView>
        <TextInput
          style={[
            Styles.textinputStyle,
            { textDecorationColor: "transparent" },
          ]}
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={false}
          spellCheck={false}
          underlineColorAndroid="transparent"
        />
        <Image
          style={Styles.ImageStyle}
          source={require("../../../../assets/images/png/Companyicon/Companyicon3x.png")}
        />
      </CustomView>
      <Text style={Styles.inputField}>Company Email Id</Text>
      <CustomView>
        <TextInput
          style={Styles.textinputStyle}
          autoCapitalize="none"
          keyboardType="email-address"
          autoCorrect={false}
          underlineColorAndroid="transparent"
        />
        <Image
          style={Styles.ImageStyle}
          source={require("../../../../assets/images/png/Emailicon/Emailicon3x.png")}
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
            underlineColorAndroid="transparent"
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

export default CompanyRegisterForm;
