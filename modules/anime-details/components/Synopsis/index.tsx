import Col from "@/components/atoms/Col";
import { Colors } from "@/constants/Colors";
import React, { memo } from "react";
import { Text } from "react-native";
import styles from "./styles";

interface Props {
  synopsis?: string;
}
const Synopsis = ({ synopsis }: Props) => {
  return (
    <Col>
      <Text style={styles.textTitle}>Synopsis</Text>
      <Text style={styles.textContent}>{synopsis}</Text>
    </Col>
  );
};

export default memo(Synopsis);
