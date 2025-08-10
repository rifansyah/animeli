import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.grey2,
  },
  textTitle: {
    fontSize: 12,
    color: Colors.grey2,
  },
  textContent: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.white,
  },
});
