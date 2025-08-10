import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  containerContent: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: "center",
  },
  containerRank: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  image: {
    height: 140,
    width: 100,
    borderRadius: 16,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  textContent: {
    fontSize: 12,
    marginTop: 8,
    color: Colors.white,
  },
});
