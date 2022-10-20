import { StyleSheet,  } from "react-native";

const styles = StyleSheet.create({

    buttonBackgroundColor: {
      height:40,
      backgroundColor: "#EDF8FE",
      paddingHorizontal: "10%",
      paddingVertical: "1%",
      borderRadius: 30,
      borderWidth:0.5,
      borderColor:"#00000014",
      margin:"10%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems:'center'
    },
    blueButtonColor: {
      height:"100%",
      paddingHorizontal: "20%",
      paddingVertical: "2%",
      borderRadius: 20,
    },
    parentSize:{
      width:"100%",
      height:"100%",
      backgroundColor:"#FFFFFF",
      // borderWidth:2,
      // borderColor:"black",
    },
    boxView:{
      borderWidth:1,
      borderColor:'#017BFD',
      paddingHorizontal: "5%",
      paddingVertical: "2%",
      height:55,
      width:"80%",
      alignSelf:'center',
      margin:"2%",
      padding:"10%",
      borderRadius:5,
    },
    topChildView:{
      height:"15%",
      // borderWidth:2,
      // borderColor:'yellow',
    },
    childView:{
      height:"75%",
      width:"100%",  
      // borderWidth:2,
      // borderColor:"red",
    },
    roundButton1:{
      height:"60%",
      width:"10%",
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      //borderRadius:100,
      // borderWidth:2,
      // borderColor:'#E10505',
      top:"45%",
      right:"3%",
    },
    buttonTextStyle:{
      color:"#E10505",
      bottom:"13%",
      fontSize:20,
      //bottom:5,
    },
    emptyMessageStyle:{
      alignSelf:'center',
      marginTop:"50%",
    }
  });

export default styles;