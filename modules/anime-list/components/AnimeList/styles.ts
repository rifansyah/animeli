import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  containerNotFound: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -64,
  },
  textNotFound: {
    color: Colors.white,
    marginBottom: 16,
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
