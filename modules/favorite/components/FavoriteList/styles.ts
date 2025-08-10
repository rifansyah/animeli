import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 112,
  },
  containerNoFavorite: {
    height: "100%",
    alignItems: "center",
    paddingTop: 120,
  },
  textNoFavorite: {
    color: Colors.white,
  },
  loadingFooter: {
    height: 164,
    justifyContent: "flex-start",
    marginTop: 16,
  },
  footer: {
    height: 164,
  },
});
