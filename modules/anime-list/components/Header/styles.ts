import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  containerFilter: {
    position: "absolute",
    right: 16,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  dot: {
    position: "absolute",
    right: 0,
    borderRadius: 16,
    height: 14,
    width: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  textDot: {
    fontSize: 10,
    color: Colors.white,
  },
});
