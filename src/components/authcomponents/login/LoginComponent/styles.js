import { StyleSheet } from "react-native";

export const OwnStyles = StyleSheet.create({
  bodyContainer: {
    height: "77%",
    width: "100%",
  },

  registerTextStyle: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    color: "#017BFD",
    textAlign: "center",
    padding: "3%",
    textDecorationLine: "underline",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "2%",
    paddingHorizontal: "16%",
  },
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#017BFD",
    padding: "3%",
    borderRadius: 8,
    marginTop: "10%",
    // marginLeft: '8%',
    // marginRight: '8%',
    height: 49,
    width: "85%",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});
