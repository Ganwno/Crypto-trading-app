import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import PortofolioScreen from "./src/screens/PortofolioScreen";
import RewardsScreen from "./src/screens/RewardsScreen";
import MarketScreen from "./src/screens/MarketScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import DepositScreen from "./src/screens/DepositScreen";
import MarketItemScreen from "./src/screens/MarketItemScreen";
import ProfileDetailsScreen from "./src/screens/profile/ProfileDetailsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MyTabs = () => (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Portofolio":
              iconName = focused ? "pie-chart" : "pie-chart-outline";
              break;
            case "Rewards":
              iconName = focused ? "gift" : "gift-outline";
              break;
            case "Market":
              iconName = focused ? "analytics" : "analytics-outline";
              break;
            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Portofolio" component={PortofolioScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Login"
          screenOptions={{
            contentStyle: {
              backgroundColor: "#FFFFFF",
            },
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tabs"
          component={MyTabs}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Deposit"
          component={DepositScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="MarketItem"
          component={MarketItemScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="ProfileDetails"
          component={ProfileDetailsScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
