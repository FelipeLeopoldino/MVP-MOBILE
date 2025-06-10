import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#f0f0f0",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 1000,
    paddingHorizontal: 15,
  },
  footerIconButton: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
  },
  iconContainer: {
    marginBottom: 4,
  },
  iconContainerActive: {
    marginBottom: 4,
  },
  iconLabel: {
    fontSize: 10,
    color: "#333",
  },
  iconLabelActive: {
    fontSize: 10,
    color: "#3E7D47",
    fontWeight: "bold",
  },
});

export default styles;
