import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  logoContainer: {
    height: "10%",
    bottom: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    textAlign: "center",
    paddingHorizontal: "25%",
  },

  text: {
    color: "#333232",
    fontSize: 16,
  },

  logoImage: {
    height: "42%",
    width: "42%",
    resizeMode: "contain",
  },
});
