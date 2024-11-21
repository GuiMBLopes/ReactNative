import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#247BA0" 
  },
  carouselContainer: { 
    alignItems: "center", 
  },
  image: { 
    width: "90%", 
    height: 200, 
    borderRadius: 10 
  },
  textContainer: {
    padding: 20,
    backgroundColor: "#006494",
    borderWidth: 2, // Borda ao redor
    borderColor: "#00A8E8", // Cor da borda azul clara
    borderRadius: 15, // Arredondamento
    marginHorizontal: 10, // Espaçamento lateral
    marginBottom: 10, // Espaçamento para o carrossel
  },
  heading: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#fff", 
    marginBottom: 10, 
    textAlign: "center" 
  },
  description: { 
    fontSize: 15, 
    color: "#E8F1F2", 
    lineHeight: 22, 
    textAlign: "justify" 
  },
  infoContainer: {
    padding: 5,
    borderWidth: 2, 
    borderColor: "#00A8E8",
    backgroundColor: "#006494",
    marginTop: 10,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  infoText: {
    fontSize: 16,
    color: "#E8F1F2",
    lineHeight: 24,
    textAlign: "justify",
  },
});

export default styles;
