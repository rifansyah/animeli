import Col from "@/components/atoms/Col";
import Row from "@/components/atoms/Row";
import { Anime } from "@/services/api/anime.type";
import React, { memo } from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DetailsCard from "../DetailsCard";
import styles from "./styles";

interface Props {
  anime?: Anime;
}

const Details = ({ anime }: Props) => {
  return (
    <Col>
      <Text style={styles.textTitle}>Details</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Row style={{ gap: 16 }}>
          <DetailsCard title="Studio" value={anime?.studios[0].name} />
          <DetailsCard title="Episodes" value={anime?.episodes?.toString()} />
          <DetailsCard title="Status" value={anime?.status} />
          <DetailsCard title="Type" value={anime?.type} />
          <DetailsCard title="licensors" value={anime?.licensors[0].name} />
        </Row>
      </ScrollView>
    </Col>
  );
};

export default memo(Details);
