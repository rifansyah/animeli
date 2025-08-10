import BottomTabs from "@/modules/home/components/BottomTabs";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        lazy: true,
      }}
      tabBar={(props) => <BottomTabs {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "List",
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "Favorite",
        }}
      />
    </Tabs>
  );
}
