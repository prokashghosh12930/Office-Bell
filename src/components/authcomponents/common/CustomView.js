import React, { useState } from "react";
import { View } from "react-native";
import { Styles } from "./styles/styles";

function CustomView(props) {
  const [inputBackgroundColor, setInputBackgroundColor] = useState("#FFFFFF");
  const [inputBorderColor, setInputBorderColor] = useState("#F2F2F2");

  const customOnFocus = () => {
    props?.onFocus;
    setInputBackgroundColor("#EDF8FE");
    setInputBorderColor("#017BFD");
  };

  const customOnBlur = () => {
    props?.onBlur;
    setInputBackgroundColor("#FFFFFF");
    setInputBorderColor("#F2F2F2");
  };

  return (
    <View
      {...props}
      style={[
        Styles.SectionStyle,
        {
          backgroundColor: inputBackgroundColor,
          borderColor: inputBorderColor,
        },
      ]}
      onFocus={customOnFocus}
      onBlur={customOnBlur}
    ></View>
  );
}

export default CustomView;
