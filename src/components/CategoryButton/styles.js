import { StyleSheet,  } from "react-native";

const styles = StyleSheet.create({
    categoryButton:{
        flexDirection:'row',
        //justifyContent:'space-evenly',
        borderColor:'#017BFD',
        height:"80%",
        borderWidth:1,
        borderRadius:10,
        width:"43%",
        paddingVertical:9,
        marginVertical:10,
        marginHorizontal:9,
        alignSelf:'center',
        // elevation: 5,
        // shadowColor: '#BEBEBE',
    },
    listView:{
        alignSelf:'center',
        //  borderWidth:5,
        //  borderColor:'blur',
        left:"2%",
    },
    categoryTextStyles:{
        top:"1%",
        color:"#4a4848",
        fontSize:17,
        fontWeight:'bold',
    },
    categoryImageStyle:{
        height:"100%",
        width:"100%",
        //backgroundColor:"#EDF8FE",
        flex:0.5,
        resizeMode:'contain'
    },
    ListStyle:{
        alignItems:'center',
        width:"100%",
        height:"85%",
        padding:3,
        top:"4%",
        justifyContent:'center',
        // borderWidth:2,
        // bordercolor:'#ff0000'
    },
    doneButton:{
        backgroundColor:"#017BFD",
        borderRadius:10,
        height:"90%",
        width:"90%",
        left:"2%",
        //right:"4%",
        //alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
       // marginVertical:"10%",
        //top:"10%"
    },
    doneButtonTextColor:{
        color:'#FFFFFF',
        fontSize:19,
    },
    footerStyle:{
        //top:20,
        marginVertical:"15%",
        width: "100%",
        height: 55,
        // borderWidth:2,
        // borderColor:'red',
        alignSelf:'center',
      }
})
export default styles;