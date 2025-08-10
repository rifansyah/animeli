import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bottomSheet: {
    paddingHorizontal: 16,
  },
  backgroundBottomSheet: {
    backgroundColor: Colors.background,
  },
  textTitle: {
    fontSize: 16,
    marginBottom: 16,
    color: Colors.white,
  },
  rowGenres: {
    flexWrap: "wrap",
    gap: 8,
  },
  chipSelected: {
    flexDirection: "row",
    backgroundColor: Colors.transparent,
    borderColor: Colors.primary,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textSelected: {
    color: Colors.primary,
    marginRight: 4,
    marginBottom: 2,
  },
  textNoSelected: {
    color: Colors.grey2,
    textAlign: "center",
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: Colors.grey,
    borderStyle: "dashed",
    marginVertical: 16,
  },
  containerGenres: {
    height: 300,
  },
  chipGenreList: {
    backgroundColor: Colors.primary,
  },
  textGenreList: {
    color: Colors.white,
  },
  button: {
    marginVertical: 16,
  },
});
