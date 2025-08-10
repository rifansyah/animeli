import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: Colors.background,
    bottom: 0,
    flexDirection: "row",
    padding: 16,
    paddingBottom: 32,
    gap: 16,
  },
  buttonShare: {
    alignSelf: "flex-start",
    borderRadius: 60,
    backgroundColor: Colors.white,
  },
  buttonFavorite: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: "row",
    borderRadius: 24,
  },
  textIsFavorite: {
    marginLeft: 8,
    color: Colors.white,
  },
  textAddFavorite: {
    marginLeft: 8,
    color: Colors.background,
  },
});
