import { Colors } from "@/constants/Colors";
import { SCREEN_HEIGHT } from "@gorhom/bottom-sheet";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  containerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  containerBody: {
    padding: 16,
    gap: 8,
  },
  buttonBack: {
    position: "absolute",
    alignSelf: "flex-start",
    borderRadius: 80,
    top: 32,
    left: 16,
    zIndex: 100,
    backgroundColor: Colors.white,
  },
  imageBanner: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.6,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: Colors.white,
  },
  textContent: {
    fontSize: 14,
    color: Colors.grey2,
    fontWeight: "bold",
  },
});
