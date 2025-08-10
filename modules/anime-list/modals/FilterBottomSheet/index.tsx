import Button from "@/components/atoms/Button";
import Chip from "@/components/atoms/Chip";
import Col from "@/components/atoms/Col";
import Row from "@/components/atoms/Row";
import BottomSheetModal, {
    BottomSheetModalMethods,
} from "@/components/molecules/BottomSheetModal";
import { Colors } from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { memo, useEffect, useRef, useState } from "react";
import { InteractionManager, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
    FadeIn,
    FadeOut,
    LinearTransition,
} from "react-native-reanimated";
import { Filter } from "../../types";
import useGenresData from "./hooks/useGenresData";
import styles from "./styles";

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  filter?: Filter;
  onFilterChange?: (filter?: Filter) => void;
}
const FilterBottomSheet = ({
  isOpen,
  filter,
  onClose,
  onFilterChange,
}: Props) => {
  const bottomSheetRef = useRef<BottomSheetModalMethods>(null);

  const [selectedGenreIDs, setselectedGenreIDs] = useState<number[]>(
    filter?.genre_ids ?? []
  );

  const { availableGenres, genreMap } = useGenresData(selectedGenreIDs);

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      if (isOpen) bottomSheetRef.current?.present();
      else bottomSheetRef.current?.dismiss();
    });
  }, [isOpen]);

  const onChangeBS = (index: number, position: number) => {
    if (index === -1) {
      onClose?.();
    }
  };

  const onSelectGenre = (id: number) => {
    if (selectedGenreIDs.includes(id)) {
      setselectedGenreIDs((prev) => prev.filter((i) => i !== id));
    } else {
      setselectedGenreIDs((prev) => [...prev, id]);
    }
  };

  const onPressSave = () => {
    const filter: Filter = {
      genre_ids: selectedGenreIDs,
    };

    onFilterChange?.(filter);

    bottomSheetRef.current?.dismiss();
  };

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      onChange={onChangeBS}
      maxDynamicContentSize={600}
      style={styles.bottomSheet}
      backgroundStyle={styles.backgroundBottomSheet}
    >
      <Col>
        <Text style={styles.textTitle}>Selected genres:</Text>
        {selectedGenreIDs.length > 0 ? (
          <Row style={styles.rowGenres}>
            {selectedGenreIDs.map((id) => {
              const genre = genreMap[id];

              return (
                <Animated.View
                  key={id}
                  sharedTransitionTag={id.toString()}
                  layout={LinearTransition.springify().damping(18)}
                  entering={FadeIn.duration(120)}
                  exiting={FadeOut.duration(120)}
                >
                  <Chip
                    onPress={() => onSelectGenre(id)}
                    style={styles.chipSelected}
                  >
                    <Text style={styles.textSelected}>{genre?.name}</Text>
                    <AntDesign name="close" size={16} color={Colors.primary} />
                  </Chip>
                </Animated.View>
              );
            })}
          </Row>
        ) : (
          <Text style={styles.textNoSelected}>No genre selected</Text>
        )}
      </Col>
      <View style={styles.separator} />
      <ScrollView style={styles.containerGenres}>
        <Row style={styles.rowGenres}>
          {availableGenres?.map((genre) => (
            <Animated.View
              key={genre.mal_id}
              sharedTransitionTag={genre.mal_id.toString()}
              layout={LinearTransition.springify().damping(18)}
              entering={FadeIn.duration(120)}
              exiting={FadeOut.duration(120)}
            >
              <Chip
                text={genre.name}
                onPress={() => onSelectGenre(genre.mal_id)}
                style={styles.chipGenreList}
                textStyle={styles.textGenreList}
              />
            </Animated.View>
          ))}
        </Row>
      </ScrollView>
      <Button style={styles.button} text="Save" onPress={onPressSave} />
    </BottomSheetModal>
  );
};

export default memo(FilterBottomSheet);
