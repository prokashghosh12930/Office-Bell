import React, { useState } from "react";
import CustomProgressBar from "../CustomProgressBar";
import { ProgressCircle } from "react-native-material-indicators";
import { View, Text, Modal } from "react-native";
import styles from "./styles";
const Loader = (props) => {
  const [isProgress, setIsProgress] = useState(false);
  const showSuccessMessage = () => {
    setIsProgress(true);
  };
  setTimeout(showSuccessMessage, 5000);
  return isProgress ? (
    <CustomProgressBar title={props.successTitle} subTitleOne={props.successSubTitleOne} subTitleTwo={props.successSubTitleTwo}/>
  ) : (
    <Modal onRequestClose={() => null} transparent={true}>
      <View style={styles.progressBackground}>
        <View style={styles.progressBoxStyle}>
          <Text style={styles.headerOfLoader}>{props.title}</Text>
          <View style={styles.activtyIndicatorStyle}>
            <ProgressCircle
              value={100}
              size={48}
              thickness={1}
              color="#017BFD"
              animationMethod="timing"
              animationConfig={{ duration: 3000 }}
              shouldAnimateFirstValue
              determinate
            />
          </View>
          <Text style={styles.loaderBoxTextStyle}> {props.firstSubtitle} </Text>
          <Text style={styles.loaderBoxTextStyle}>{props.secondSubtitle}</Text>
        </View>
      </View>
    </Modal>
  );
};

// <ActivityIndicator size="large" color="#017BFD" />
//<ActivityIndicator size="large" color="#017BFD"/>
// const CustomProgressBar = () => {
// const [isProgress, setIsProgress] = useState(false);
//   const  openLoader = () => {
//   setIsProgress(true);
//    };
//     return isProgress ? (
//       <Loader />
//     ) : (
//       <Modal
//         onRequestClose={() => null}
//         animationType={"slide"}
//         visible={true}
//         transparent={true}
//       >
//         <View style={styles.progressBackground}>
//           <View style={styles.successBoxStyle}>
//             <Image
//               source={require("../../assets/images/png/doneIcon/Doneicon.png")}
//             />
//             <Text style={styles.RequiestdoneTextColor}>Requiest Done</Text>
//             <Text>Your Requiest of tea is{"\n"}      successful done.</Text>
//             <TouchableOpacity
//               style={styles.okButtonStyle}
//               onPress={openLoader}
//             >
//               <Text style={styles.okTextColorSize}>OK</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     );
// }
export default Loader;
/*<View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Please click here to Open ProgressBar" onPress={this.openProgressbar} />
        </View>
*/
