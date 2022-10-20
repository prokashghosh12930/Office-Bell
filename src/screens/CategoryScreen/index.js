import React from "react";
import {
  View,
} from "react-native";
import CategoryScreenHeader from "../../components/CategoryScreenHeader";
import CategoryButton from "../../components/CategoryButton";
import LogoutButton from "../../components/LogoutButton";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
const CategoryScreen = () => {
    return (
      <SafeAreaView>
      <View>
        <View style={styles.parentCategory}>
          <CategoryScreenHeader title="Devika Khalsha What is your mind?" />
          
          <CategoryButton />
        </View>
        <LogoutButton />
      </View>
      </SafeAreaView>
    );
}
export default CategoryScreen;
// <CategoryButton src="./Coffeeicon.png"  name="Coffe"/>
//import CategoryButton from "../../components/CategoryButton";
