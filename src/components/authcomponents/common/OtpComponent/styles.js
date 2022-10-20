import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  textStyle: {
    display: "flex",
    fontSize: 20,
    color: "#333232",
    textAlign: "center",
    paddingLeft: "10%",
    paddingRight: "20%",
    paddingTop: "25%",
  },

  boxContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    paddingTop: "15%",
    paddingHorizontal: "10%",
  },

  boxStyle: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#017BFD",
    height: 50,
    width: 50,
  },

  boxText: {
    fontSize: 20,
    color: "#333232",
    marginLeft: "20%",
  },

  text: {
    display: "flex",
    alignItems: "center",
    fontSize: 14,
    color: "#9E9D9D",
    textAlign: "center",
    paddingTop: "5%",
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
    marginLeft: "69%",
  },
});
