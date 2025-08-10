import {
    BottomSheetBackdrop,
    BottomSheetBackdropProps,
    BottomSheetProps,
    BottomSheetScrollView,
    BottomSheetView,
    BottomSheetModal as GorhomBottomSheetModal,
    SCREEN_HEIGHT,
} from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods as GBottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import React, { useCallback } from "react";
import styles from "./styles";

export type BottomSheetModalMethods = GBottomSheetModalMethods;

interface Props extends BottomSheetProps {
  ref: React.Ref<BottomSheetModalMethods>;
  children: React.ReactNode;
  isScrollable?: boolean;
}
const BottomSheet = ({ children, ref, isScrollable, ...props }: Props) => {
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
        pressBehavior="close"
      />
    ),
    []
  );

  return (
    <GorhomBottomSheetModal
      ref={ref}
      backdropComponent={renderBackdrop}
      maxDynamicContentSize={SCREEN_HEIGHT}
      backgroundStyle={styles.background}
      enablePanDownToClose
      enableDynamicSizing
      {...props}
    >
      {isScrollable ? (
        <BottomSheetScrollView>{children}</BottomSheetScrollView>
      ) : (
        <BottomSheetView>{children}</BottomSheetView>
      )}
    </GorhomBottomSheetModal>
  );
};

export default BottomSheet;
