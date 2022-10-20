import React from "react";
import SplashScreen from "react-native-splash-screen";
import StackNavigation from "./navigations/stacknavigation/StackNavigation";

export default function () {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <>
      <StackNavigation />
    </>
  );
}
