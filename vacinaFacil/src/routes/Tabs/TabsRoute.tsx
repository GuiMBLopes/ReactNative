import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";
import { AnimalPage } from "../../pages/AnimalPage";
import { Header } from "../../components/Header";
import { Icon } from "react-native-elements";
import { Footer } from "../../components/Footer";
import { PessoaPage } from "../../pages/PessoaPage";
import Home from "../../pages/Home";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        title: "",
        headerBackground: () => (
          <View>
            <Header />
          </View>
        ),
        tabBarStyle: {
          backgroundColor: "#13293D",
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={{ flexDirection: "row" }}>
              <Footer IconName="home" IconType="ionicon" Name="home" />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="pessoa"
        component={PessoaPage}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={{ flexDirection: "row" }}>
              <Footer IconName="person" IconType="ionico" Name="pessoa" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="animal"
        component={AnimalPage}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={{ flexDirection: "row" }}>
              <Footer IconName="paw-sharp" IconType="ionicon" Name="animal" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
