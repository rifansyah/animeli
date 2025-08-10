import Col from "@/components/atoms/Col";
import React, { memo } from "react";
import { Text } from "react-native";
import styles from "./styles";

interface Props {
  title: string;
  value?: string;
}
const DetailsCard = ({ title, value }: Props) => {
  return (
    <Col style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textContent}>
        {value || "-"}
      </Text>
    </Col>
  );
};

export default memo(DetailsCard);
