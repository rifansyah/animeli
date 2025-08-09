import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.light.white,
    position: "absolute",
    bottom: 16,
    marginHorizontal: 16,
    elevation: 16,
    borderRadius: 48,
    padding: 16,
  },
});

export default styles;
