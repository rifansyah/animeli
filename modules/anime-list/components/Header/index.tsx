import Row from "@/components/atoms/Row";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface Props {
  onPressFilter?: () => void;
  filterCount?: number;
}
const Header = ({ onPressFilter, filterCount }: Props) => {
  return (
    <Row style={styles.container}>
      <Text style={styles.textTitle}>Anime List</Text>

      <TouchableOpacity onPress={onPressFilter} style={styles.containerFilter}>
        <AntDesign name="filter" size={28} />
        {!!filterCount && (
          <View style={styles.dot}>
            <Text style={styles.textDot}>{filterCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </Row>
  );
};

export default memo(Header);
