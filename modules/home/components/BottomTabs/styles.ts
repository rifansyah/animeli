import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    position: "absolute",
    bottom: 16,
    marginHorizontal: 16,
    elevation: 16,
    padding: 16,
    borderRadius: 48,
    shadowColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
