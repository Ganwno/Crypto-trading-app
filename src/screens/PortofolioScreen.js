import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import MarketCard from "../components/MarketCard";
import { useNavigation } from "@react-navigation/native";

const PortofolioScreen = () => {
  const navigation = useNavigation();
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
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View className="w-96 h-52 bg-blue-600 rounded-2xl my-3">
          <View className="flex-1 ml-6 mt-5">
            <Text className="text-white font-semibold text-2xl">
              Portofolio
            </Text>
            <Text className="text-white font-base mt-6">Holding value</Text>
            <View className="flex flex-row items-baseline">
              <Text className="text-white text-3xl font-bold">$2,780.55</Text>
              <Text className="ml-3 text-slate-50">+9.77%</Text>
            </View>
            <View className="flex flex-row items-center space-x-5 mt-1">
              <View className="">
                <Text className="text-white text-sm mt-3">Invested value</Text>
                <Text className="text-white text-base font-bold">
                  $1,618.75
                </Text>
              </View>
              <Text className="text-slate-200">|</Text>
              <View className="">
                <Text className="text-white text-sm mt-2">Available USD</Text>
                <Text className="text-white text-base font-bold">$1,118</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-1 flex-row justify-evenly space-x-3">
          <TouchableOpacity
            className="bg-blue-600 w-44 h-14 rounded-md justify-center items-center"
            onPress={() =>
              navigation.navigate("Deposit", { action: "deposit" })
            }
          >
            <Text className="text-white font-semibold text-sm">
              Deposit USD
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border bg-white border-blue-600 w-44 h-14 rounded-md justify-center items-center"
            onPress={() =>
              navigation.navigate("Deposit", { action: "widthdraw" })
            }
          >
            <Text className="text-blue-600 font-semibold text-sm">
              Withdraw USD
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-2xl font-semibold mt-5 mb-3">Your coins</Text>
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

export default PortofolioScreen;
