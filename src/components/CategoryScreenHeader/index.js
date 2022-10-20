import React from "react";
import { View, Text} from 'react-native';
import styles from "./styles";
const CategoryScreenHeader = (props) => {
        return(
            <View style={styles.headerStyle}>
                <Text style={styles.textStyle}>{props.title}</Text>
            </View>
        );
}
export default CategoryScreenHeader;

