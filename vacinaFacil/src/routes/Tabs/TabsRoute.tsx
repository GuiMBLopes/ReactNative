import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";
import { AnimalPage } from "../../pages/AnimalPage";
import { Header } from "../../components/Header";
import { Icon } from "react-native-elements";
import { Footer } from "../../components/Footer";

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
        ), tabBarStyle:{
          backgroundColor:"#13293D", height:80
        }
      }}
    >
      <Tab.Screen
        name="animal"
        component={AnimalPage}
        options={{
          tabBarIcon: ({focused, size}) => (
            <View style={{flexDirection:"row"}}>
            <Footer IconName="home" Name="home"/>
            <Footer IconName="person" IconType="ionico" Name="pessoa" />
            <Footer IconName="paw-sharp" IconType="ionicon" Name="animal"/>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
