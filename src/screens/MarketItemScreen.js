import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import InteractiveChart from "../components/Chart";
import Chips from "../components/Chips";
import { useNavigation } from "@react-navigation/native";

const MarketItemScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, subTitle } = route.params;

  const [error, setError] = useState(false);
  const [isPriceHistoryLoading, setIsPriceHistoryLoading] = useState(true);
  const [marketDataIsLoading, setMarketDataIsLoading] = useState(true);
  const [priceHistory, setPriceHistory] = useState([]);
  const [marketData, setMarketData] = useState({});
  const [selectedTime, setSelectedTime] = useState(1);

  const crypto = title.toLowerCase();

  const fetchMarketData = async () => {
    try {
      let response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${crypto}/`
      );
      console.log(response);
      let data = await response.json();
      if (data.error) {
        console.log(data.error);
        setError(true);
        return;
      }
      setMarketData(data);
      setMarketDataIsLoading(false);
      if (!error) {
        // fetch price history data from API
        response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=${selectedTime}}`
        );
        data = await response.json();

        // format data for react-native-graph
        let formattedData = data.prices.map((price) => {
          return { date: new Date(price[0]), value: Number(price[1]) };
        });
        if (formattedData.length > 0) {
          setPriceHistory(formattedData);
          setIsPriceHistoryLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchMarketData();
  }, [route, selectedTime]);

  const apiIconUri = (subTitle) =>
    `https://coinicons-api.vercel.app/api/icon/${subTitle}`;

  return (
    <SafeAreaView className="flex-1">
      <TouchableOpacity
        className="flex flex-row items-center px-3 my-3 space-x-2"
        onPress={() => navigation.goBack()}
      >
        <Icon name="chevron-back" size={30} />
        <Image
          source={{ uri: apiIconUri(subTitle.toLowerCase()) }}
          className="h-7 w-7 rounded-full"
        />
        <Text>
          {title} {marketData.symbol?.toUpperCase()}
        </Text>
        <Icon name="star-outline" size={20} />
      </TouchableOpacity>
      {isPriceHistoryLoading && marketDataIsLoading ? (
        <Text>Loading price history</Text>
      ) : (
        <>
          {error === true ? (
            <Text>An error has occoured</Text>
          ) : (
            <>
              <View className="flex flex-row px-4 items-baseline space-x-3">
                <Text className="text-2xl font-semibold">
                  ${Number(priceHistory.pop()?.value).toFixed(2)}
                </Text>
                <Text
                  className={`text-lg font-medium ${
                    marketData.market_data.price_change_percentage_24h > 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {marketData.market_data.price_change_percentage_24h > 0
                    ? "+"
                    : ""}{" "}
                  {marketData.market_data.price_change_percentage_24h.toFixed(
                    2
                  )}
                  %
                </Text>
              </View>
              <View className="flex mt-5">
                {isPriceHistoryLoading ? (
                  <Text>Loading...</Text>
                ) : (
                  <InteractiveChart priceHistory={priceHistory} />
                )}
              </View>
              <Chips
                values={[1, 7, 14, 30, 60, 200]}
                onPress={(val) => setSelectedTime(val)}
                unit="D"
              />
              <View className="flex mt-10 w-full">
                <View className="flex flex-row mx-6 py-4 items-center bg-white rounded-lg shadow-sm">
                  <View className="flex-1 flex-row items-center justify-around mx-4">
                    <View className="flex-1 flex-row items-center">
                      <Image
                        source={{ uri: apiIconUri(subTitle.toLowerCase()) }}
                        className="h-10 w-10 rounded-full mr-4"
                      />
                      <Text className="text-lg font-normal">
                        {marketData.name}
                      </Text>
                    </View>
                    <Text className="text-xs font-light">
                      0.000126 {marketData.symbol.toUpperCase()}
                    </Text>
                  </View>
                </View>
              </View>
              <View className="flex mt-3 w-full">
                <TouchableOpacity className="flex flex-row mx-6 py-4 items-center bg-white rounded-lg shadow-sm">
                  <View className="flex-1 flex-row items-center justify-around mx-4">
                    <View className="flex-1 flex-row items-center">
                      <Text className="text-base font-medium">
                        Transactions
                      </Text>
                    </View>
                    <Icon name="chevron-forward" size={28} color="gray" />
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-1 flex-col justify-end">
                <View className="flex flex-row justify-between mx-6 h-14">
                  <TouchableOpacity className="flex justify-center bg-blue-600 rounded px-16">
                    <Text className="text-white text-lg font-semibold">
                      BUY
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex justify-center bg-blue-600 rounded px-16">
                    <Text className="text-white text-lg font-semibold">
                      SELL
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default MarketItemScreen;
