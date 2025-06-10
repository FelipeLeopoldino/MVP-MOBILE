import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  CardText: {
    backgroundColor: "#fff",
    width: 250,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 10,
  },
  CardTextText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const internalStyles = StyleSheet.create({
  CardTextContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginHorizontal: 8,
  },
});

export { styles, internalStyles };
