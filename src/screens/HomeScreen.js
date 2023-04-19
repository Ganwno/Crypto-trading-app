import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import MarketCard from "../components/MarketCard";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1`
      );
      const json = await response.json();
      setData(json);
    } catch (err) {
      setIsError(true);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        <StatusBar hidden="false" style="dark" />
        <View className="w-96 h-40 bg-blue-600 rounded-2xl my-3">
          <View className="flex-1 justify-center ml-6 space-y-4">
            <View className="space-y-2">
              <Text className="text-left text-white font-medium">
                Welcome Razvan,
              </Text>
              <Text className="text-left text-white font-bold text-lg">
                Make you first Investment today
              </Text>
            </View>
            <View className="bg-white w-4/12 h-1/4 justify-center items-center rounded">
              <TouchableOpacity className="">
                <Text className="text-blue-600 font-bold">Invest Today</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text className="text-2xl font-semibold mt-5 mb-3">Trending coins</Text>
        {isError ? (
          <Text>Error fetching data</Text>
        ) : (
          <>
            {data?.map((market) => (
              <MarketCard
                key={market.id}
                title={market.name}
                subTitle={market.symbol}
                priceUsd={market.current_price}
                changePercent24Hr={market.price_change_percentage_24h}
              />
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
