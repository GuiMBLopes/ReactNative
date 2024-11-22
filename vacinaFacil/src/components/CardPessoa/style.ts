import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cards: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    elevation: 8,
    marginHorizontal: 20,
    overflow: "hidden",
    marginBottom: 20
  },

  cardsInfos: {
    marginBottom: 10,
  },

  tituloCards: {
    fontSize: 18,
    fontWeight: "900",
    color: "#006494",
    marginBottom: 5,
  },

  subtituloCards: {
    fontSize: 14,
    color: "#000",
    marginBottom: 15,
  },

  local: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#006494",
    marginBottom: 10,
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
    width:'60%'
  },

  horario: {
    fontSize: 13,
    color: "#000",
    flex: 1,
  },
  boxData:{
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },

  boxHora:{
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  }
});
