// import React, { useState } from "react";
// import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { Styles } from "./selectrole_registration/RegistrationComponent/styles";
// import data from "../../../constant/RegistrationRole.json";

// function Registration1(props) {
//   const navigation = useNavigation();

//   return (
//     <View>
//       <FlatList
//         keyExtractor={(item) => item.index}
//         data={data.info}
//         renderItem={({ item }) => (
//           <View style={Styles.SectionBox}>
//             <View style={Styles.imageContainer}>
//               <Image source={{ uri: item.image }} style={Styles.ImageStyle} />
//             </View>
//             <Text style={Styles.inputText}>{item.role_text}</Text>
//           </View>
//         )}
//       />
//       <TouchableOpacity
//         style={Styles.buttonStyle}
//         onPress={() => navigation.navigate("companyregister")}
//       >
//         <Text style={Styles.buttonText}>Next</Text>
//         <Image
//           style={Styles.buttonImage}
//           source={require("../../../assets/images/png/arrowbutton/arrowbutton.png")}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default Registration1;




