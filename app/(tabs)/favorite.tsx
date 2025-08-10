import Header from "@/components/molecules/Header";
import FavoriteList from "@/modules/favorite/components/FavoriteList";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const favorite = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Enjoy Your Favorites 😊" />
      <FavoriteList />
    </SafeAreaView>
  );
};

export default favorite;
