import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
  },
  viewButtons: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 16,
  },
});
