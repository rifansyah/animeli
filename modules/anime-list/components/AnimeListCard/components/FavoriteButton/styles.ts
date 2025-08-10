import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 6,
  },
  button: {
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: Colors.primary,
  },
  textButton: {
    marginTop: -2,
    marginLeft: 8,
  },
});
