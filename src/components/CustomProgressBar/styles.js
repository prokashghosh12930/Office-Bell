import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  progressBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "#D3D3D3",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  progressBoxStyle: {
    borderRadius: 10,
    backgroundColor: "white",
    padding: 25,
    height: "30%",
    width: "90%",
    justifyContent: "space-evenly",
  },
  successBoxStyle: {
    height: "50%",
    width: "90%",
    alignItems: "center",
    //justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    // borderWidth:2,
    // borderColor:"black",
  },
  doneIconStyle:{
    top:"10%",
  },
  subtitlsText:{
    top:"20%",
    alignItems:"center",
  },
  RequiestdoneTextColor: {
    color: "#017BFD",
    fontSize: 20,
    top:"17%",
  },
  okButtonStyle: {
    top: "29%",
    backgroundColor: "#017BFD",
    color: "#017BFD",
    borderRadius: 10,
    height: "13%",
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