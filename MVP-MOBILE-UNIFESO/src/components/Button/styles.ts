// src/components/Button/styles.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#3E7D47",
  },
  outlineText: {
    color: "#3E7D47",
  },
  small: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  large: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  disabled: {
    backgroundColor: "#cccccc",
    borderColor: "#999999",
  },
  disabledText: {
    color: "#666666",
  },
});

export default styles;
