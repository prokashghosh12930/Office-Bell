import React, { useState, createContext } from "react";
import { TouchableOpacity, Text, Image, View, FlatList } from "react-native";
import Loader from "../../components/Loader";
import CategoryListData from "../../constant/CategoryListData";
import styles from "./styles";
const successMessageTitle = createContext();
const successMessageSubTitleFirst = createContext();
const successMessageSubTitleSecond = createContext();
const CategoryButton = () => {
  // isProgress: false,
  const [isProgress, setIsProgress] = useState(false);
  const [Data, setData] = useState(CategoryListData);
  //const [selectedItem, setSelectedItem] = useState(null)
  //const [flag, setFlag] = useState(0);

  const openProgressbar = () => {
    setIsProgress(true);
  };
  const onClickItem = (id) => {
    let renderData = [...Data];
    for (let data of renderData) {
      if (data.index == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    setData(renderData);
  };
  return (
    <View style={styles.ListStyle}>
            <FlatList
              numColumns={2}
              data={Data}
              style={styles.listView}
              ListHeaderComponent={() =>
                isProgress ? (
                  <Loader
                    title="Requesting"
                    firstSubtitle="Please wait, your requesting"
                    secondSubtitle="is sending..."
                    successTitle="Request Done"
                    successSubTitleOne="Your request of tea is"
                    successSubTitleTwo="successful done"
                  />
                ) : null
              }
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.categoryButton,
                    {
                      backgroundColor:
                        item.selected == true ? "#EDF8FE" : "#FFFFFF",
                    },
                  ]}
                  onPress={() => onClickItem(item.index)}
                >
                  <Image style={styles.categoryImageStyle} source={item.src} />
                  <Text style={styles.categoryTextStyles}> {item.name}</Text>
                </TouchableOpacity>
              )}
              ListFooterComponent={() => (
                <TouchableOpacity
                  style={styles.doneButton}
                  onPress={openProgressbar}
                >
                  <Text style={styles.doneButtonTextColor}>Done</Text>
                </TouchableOpacity>
              )}
              ListFooterComponentStyle={styles.footerStyle}
            />
    </View>
  );
};
export default CategoryButton;
/* <FlatList 
        data={CategoryListItems.Data}
        renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryButton}>
                <Image style={styles.categoryImageStyle} source={require("item.src")}/>
                <Text style={styles.categoryTextStyles}> {item.name} </Text>
            </TouchableOpacity>
        )}
        <Image style={styles.categoryImageStyle} source={item.src}/>
        /><Image style={styles.categoryImageStyle} source={require('../../assets/images/png/teaIcon/Teaicon.png')}/>
        <Image style={styles.categoryImageStyle} source={item.src}/>
            */
