import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  superView:{
    backgroundColor:"#FFFFFF"
  },
  parentViewStyle: {
    height: "78%",
    width: "100%",
    // borderWidth: 2,
    // borderColor: "blue",
    justifyContent: "center",
    backgroundColor:"#FFFFFF",
    top:"4%"
  },
  boxView: {
    height: 64,
    width: "90%",
    borderWidth:0.5,
    borderColor:'#00000014',
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: "2%",
    elevation: 9,
    shadowColor: "#BEBEBE",
  },
  picImage: {
    position: "absolute",
    height: "100%",
    width: "18%",
    right: 0,
    backgroundColor: "#017BFD",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteAllTextColor: {
    position: "relative",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  leftImage: {
    height: "60%",
    width:"60%",
    flex: 0.5,
    resizeMode: "contain",
  },
  imageBox: {
    height:"70%",
    width: "13%",
    borderRadius: 10,
    left: 1,
    backgroundColor: "#EDF8FE",
    alignItems:'center',
    justifyContent:'center',
     position: "absolute",
     left:10,
  },
  messageStyle:{
    color:"#000000",
    fontSize:15,
    //fontWeight:"bold",
  },
  emptyScreenMessage: {
    alignSelf: "center",
    marginTop: "50%",
  },
  footerStyle: {
    width: "89%",
    height: 59,
    // borderWidth:2,
    // borderColor:'red',
    alignSelf: "center",
    marginVertical:"14%",
  },
});
export default styles;
