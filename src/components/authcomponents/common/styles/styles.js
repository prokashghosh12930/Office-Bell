import { Platform, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  bodyContainer: {
    height: "77%",
    width: "100%",
  },
  SectionStyle: {
    height: Platform.OS === "android" ? 50 : 70,
    // height: 50,
    width: "85%",
    borderWidth: 1,
    borderColor: "#F2F2F2",
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: "3%",
  },

  inputField: {
    color: "#9E9D9D",
    fontSize: 14,
    marginLeft: "8%",
    marginTop: "3%",
  },

  firstInput: {
    marginTop: "6%",
    color: "#9E9D9D",
    fontSize: 14,
    marginLeft: "8%",
  },

  childStyle: {
    flexDirection: "row-reverse",
    width: "88%",
  },

  contactTextinput: {
    marginLeft: "2%",
    width: "82%",
    fontSize: 14,
  },

  contactText: {
    justifyContent: "center",
    flexDirection: "row-reverse",
    alignItems: "center",
  },

  downArrow: {
    height: 20,
    resizeMode: "contain",
  },

  inputStyle: {
    color: "#9E9D9D",
    fontSize: 14,
  },

  registerText: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    color: "#9E9D9D",
    textAlign: "center",
    padding: "3%",
  },

  textinputStyle: {
    width: "84%",
    marginLeft: "3%",
    fontSize: 14,
  },

  ImageStyle: {
    padding: "3%",
    height: "8%",
    width: "13%",
    resizeMode: "contain",
    alignItems: "center",
  },
});

// SectionStyle:{
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   borderRadius: 10,
//   marginTop: "3%",
//   marginLeft: "8%",
//   marginRight: "8%",
//   borderWidth: 1,
// }
