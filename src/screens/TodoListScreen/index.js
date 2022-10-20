import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryScreenHeader from "../../components/CategoryScreenHeader";
import DeleteAllButton from "../../components/DeleteAllButton";
import LogoutButton from "../../components/LogoutButton";
import TodoListData from "../../constant/TodoListData";
import styles from "./styles";
const TodoListScreen = () => {
  const [List, setList] = useState(TodoListData);
  const removeValue = (id) => {
    let newData = List.filter((item) => item.index != id);
    setList(newData);
  };

  const deleteAll = () => {
    let emptyData = [];
    setList(emptyData);
  };
  return (
    <SafeAreaView>
      <View style={styles.superView}>
        <CategoryScreenHeader title="To Do List" />
        <View style={styles.parentViewStyle}>
          <FlatList
            data={List}
            ListHeaderComponent={() =>
              !List.length ? (
                <View style={styles.emptyScreenMessage}>
                  <Image
                    source={require("../../assets/images/png/Cloudface.png")}
                  />
                  <Text>The list is empty</Text>
                </View>
              ) : null
            }
            renderItem={({ item }) => (
              <View style={styles.boxView}>
                <View style={styles.imageBox}>
                  <Image style={styles.leftImage} source={item.image} />
                </View>
                <Text style={styles.messageStyle}>{item.title}</Text>
                <TouchableOpacity
                  style={styles.picImage}
                  onPress={() => removeValue(item.index)}
                >
                  <Image
                    source={require("../../assets/images/png/check/Check.png")}
                    resizeMode="center"
                  />
                </TouchableOpacity>
              </View>
            )}
            ListFooterComponent={() =>
              List.length ? <DeleteAllButton deleteAll={deleteAll} /> : null
            }
            ListFooterComponentStyle={styles.footerStyle}
          />
        </View>
        <LogoutButton />
      </View>
    </SafeAreaView>
  );
};
export default TodoListScreen;