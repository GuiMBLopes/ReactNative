import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#247BA0",
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 60,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
    textAlign: "center",
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    height: 50,
  },
  logoutButton: {
    backgroundColor: "#A93226",
    borderRadius: 10,
    padding: 15,
    margin: 30,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
