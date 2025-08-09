import AntDesign from "@expo/vector-icons/AntDesign";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { memo } from "react";
import { View } from "react-native";
import TabItem from "./components/TabItem";
import styles from "./styles";

export interface IconProps {
  color: string;
  isFocused?: boolean;
}

const icons = {
  index: (props: IconProps) => <AntDesign name="home" size={24} {...props} />,
  list: (props: IconProps) => (
    <AntDesign name="antdesign" size={24} {...props} />
  ),
  favorite: (props: IconProps) => (
    <AntDesign name="hearto" size={24} {...props} />
  ),
};

type routeName = keyof typeof icons;

const BottomTabs = ({ state, navigation, descriptors }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const renderIcon = icons[route.name as routeName] ?? (() => null);

        return (
          <TabItem
            key={route.key}
            label={label}
            isFocused={isFocused}
            onPress={onPress}
            renderIcon={renderIcon}
          />
        );
      })}
    </View>
  );
};

export default memo(BottomTabs);
