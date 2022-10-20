import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  SectionBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: "#0000001F",
    padding: "6%",
    marginTop: "5%",
    marginLeft: "8%",
    marginRight: "8%",
    elevation: 3,
  },

  imageContainer: {
    backgroundColor: "#F1F5FD",
    borderRadius: 10,
    padding: "4%",
    alignItems: "center",
  },
  ImageStyle: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },

  inputText: {
    color: "#333232",
    fontSize: 16,
    marginLeft: "4%",
  },

  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#017BFD",
    padding: "3%",
    borderRadius: 8,
    marginTop: "10%",
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "10%",
  },

  buttonText: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "left",
    marginLeft: "3%",
  },
  buttonImage: {
    height: "90%",
    width: "7%",
    resizeMode: "stretch",
    marginLeft: "75%",
  },
});
