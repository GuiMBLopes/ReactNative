import { View, ScrollView, Text, Image } from "react-native";
import { images } from "../../Mock/Image";
import styles from "./style";
import { useEffect, useState } from "react";

const carouselImages = [
  images.Image1,
  images.Image2,
  images.Image3,
  images.Image4,
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Bem-vindo ao VacinaFácil</Text>
          <Text style={styles.description}>
            Facilite a vacinação para pets e crianças. Aqui você encontra
            informações e serviços essenciais para cuidar de quem você ama.
          </Text>
        </View>

        <View style={styles.carouselContainer}>
          <Image source={carouselImages[currentIndex]} style={styles.image} />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Informações sobre Vacinação</Text>
          <Text style={styles.infoText}>
            🔹Idosos: Garanta a proteção contra doenças sazonais como gripe e
            pneumonia.
            {"\n"}🔹Crianças: Acompanhe o calendário vacinal infantil para um
            desenvolvimento saudável.
            {"\n"}🔹Pets: Proteja seus animais de estimação com vacinas
            essenciais contra raiva e outras doenças.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
