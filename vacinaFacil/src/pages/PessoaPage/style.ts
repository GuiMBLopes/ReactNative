import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#247BA0",
    paddingTop: 50,
  },
  containerCards: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  cards: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    elevation: 8,
    marginHorizontal: 20,
    marginBottom: 15,
    overflow: "hidden",
  },
  cardsInfos: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18, 
    fontWeight: "900",
    color: "#006494",
    marginBottom: 5,
    flexShrink: 1,
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
    marginBottom: 15,
    flexShrink: 1,
  },
  local: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#006494",
    marginBottom: 10,
    flexShrink: 1,
    },
  localContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  dataHoraContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  data: {
    fontSize: 13, 
    color: "#000",
    flex: 1,
    marginRight: 10, 
  },
  horario: {
    fontSize: 13,
    color: "#000",
    flex: 1, 
    textAlign: "right", 
  },
  icon: {
    marginRight: 5,
  },
});  