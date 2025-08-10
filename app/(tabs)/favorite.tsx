import Header from "@/components/molecules/Header";
import { Colors } from "@/constants/Colors";
import FavoriteList from "@/modules/favorite/components/FavoriteList";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const FavoritePage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <Header title="Enjoy Your Favorites 😊" />
      <FavoriteList />
    </SafeAreaView>
  );
};

export default FavoritePage;
