import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  containerContent: {
    flex: 1,
    marginHorizontal: 8,
    justifyContent: "center",
  },
  containerRank: {
    position: "absolute",
    backgroundColor: Colors.primary,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 16,
    top: 8,
    left: 8,
  },
  image: {
    height: 140,
    width: 100,
    borderRadius: 16,
  },
  textRank: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: "bold",
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textContent: {
    fontSize: 12,
    marginTop: 8,
  },
});
