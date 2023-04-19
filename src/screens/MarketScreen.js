import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Line from "../components/Line";
import TopNavigationBar from "../components/TopNavigationBar";

const MarketScreen = () => {
  const tabs = ["All, Gainer", "Loser", "Favourites"];
  const [selectedTab, setSelectedTab] = useState(tabs["All"]);
  return (
    <SafeAreaView className="flex-1">
      <View className="flex mt-6 items-center">
        <View className="flex flex-row">
          <View className="flex-1 flex-row items-center justify-center">
            <Text className="text-2xl font-semibold">Market price</Text>
            <Text className="text-xl font-semibold text-red-600 ml-2">
              - 11.17%
            </Text>
          </View>
        </View>
        <Text className="mt-1 text-slate-600 text-base">
          In the past 24 hours
        </Text>
        <Text className="text-2xl font-semibold mt-7 mb-1">Markets</Text>
        <TopNavigationBar />
      </View>
    </SafeAreaView>
  );
};

export default MarketScreen;
