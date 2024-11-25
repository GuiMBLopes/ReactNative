import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AnimalPage } from "../../pages/AnimalPage";
import Home from "../../pages/Home";
import { PessoaPage } from "../../pages/PessoaPage";

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
        name="TabsHome"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ flexDirection: "row" }}>
              <Footer IconName="home" IconType="ionicon" Name="home" Focus={focused} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="pessoa"
        component={PessoaPage}
        options={{
          tabBarIcon: ({ focused}) => (
            <View style={{ flexDirection: "row" }}>
              <Footer IconName="person" IconType="ionico" Name="pessoa" Focus={focused}/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="animal"
        component={AnimalPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ flexDirection: "row" }}>
              <Footer IconName="paw-sharp" IconType="ionicon" Name="animal" Focus={focused}/>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
