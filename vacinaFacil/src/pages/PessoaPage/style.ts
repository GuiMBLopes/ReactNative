import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#247BA0",
    paddingTop: 40,
  },

  banner: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    margin: 20,
    borderRadius: 30,
    overflow: "hidden",
    elevation: 5,
  },

  imagemBanner: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 30,
    justifyContent: "center",
  },

  bannerSombra: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  tituloBanner: {
    fontSize: 26,
    color: "#FFF",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.9)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    marginTop: 5,
  },

  subtituloBanner: {
    fontSize: 18,
    color: "#FFF",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.9)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginTop: 5,
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
