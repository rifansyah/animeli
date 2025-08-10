import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  containerRank: {
    alignSelf: "flex-start",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 16,
  },
  textRank: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: "bold",
  },
});
