import { Colors } from "@/constants/Colors";
import Fontisto from "@expo/vector-icons/Fontisto";
import React from "react";
import { StyleProp, Text, ViewStyle } from "react-native";
import Row from "../Row";
import styles from "./styles";

interface Props {
  style?: StyleProp<ViewStyle>;
  score: number;
}
const Score = ({ style, score }: Props) => {
  const isGoodScore = score > 8;

  return (
    <Row style={[styles.containerRank, style]}>
      <Text style={styles.textRank}>{score}</Text>
      {isGoodScore && (
        <Fontisto
          style={{ marginLeft: 4 }}
          name="fire"
          size={12}
          color={Colors.white}
        />
      )}
    </Row>
  );
};

export default Score;
