import Row from "@/components/atoms/Row";
import React, { memo } from "react";
import { Text } from "react-native";
import styles from "./styles";

interface Props {
  title?: string;
}
const Header = ({ title }: Props) => {
  return (
    <Row style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
    </Row>
  );
};

export default memo(Header);
