import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerOfLoader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#017BFD",
    alignSelf: "center",
  },
  progressBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "#D3D3D3",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  progressBoxStyle: {
    top:"4%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10,
    height: "30%",
    width: "90%",
    justifyContent: "center",
  },
  loaderBoxTextStyle: {
    alignSelf: "center",
  },
  activtyIndicatorStyle: {
    //top:"3%",
    marginVertical:"5%",
    alignSelf:'center',
    // borderWidth:2,
    // borderColor:"black",
  },
  successBoxStyle: {
    height: "50%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  RequiestdoneTextColor: {
    color: "#017BFD",
    fontSize: 20,
  },
  okButtonStyle: {
    top: "9%",
    backgroundColor: "#017BFD",
    color: "#017BFD",
    borderRadius: 10,
    height: "10%",
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  okTextColorSize: {
    color: "#FFFFFF",
    fontSize: 20,
  }
});
export default styles;