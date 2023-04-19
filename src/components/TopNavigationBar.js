import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import MarketCard from "./MarketCard";

const TopNavigationBar = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
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

  const tabs = [
    { title: "All", link: "#" },
    { title: "Gainer", link: "#" },
    { title: "Loser", link: "#" },
    { title: "Favorite", link: "#" },
  ];

  const SelectedMenu = ({ selectedTab }) => {
    switch (selectedTab) {
      case 0:
        return (
          <>
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
          </>
        );
    }
  };

  return (
    <View className="white border-b border-gray-200">
      <View className="text-sm text-center text-gray-500">
        <View className="flex flex-row space-x-3 ">
          {tabs.map((tab, index) => (
            <View
              key={index}
              className={`w-20 py-4 text-center border-b-2 ${
                selectedTab === index ? "border-blue-600" : "border-transparent"
              }`}
            >
              <Text
                onPress={() => setSelectedTab(index)}
                className={`text-center font-semibold text-base ${
                  selectedTab === index
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-1 mt-6 mb-40">
          <SelectedMenu selectedTab={selectedTab} />
        </View>
      </ScrollView>
    </View>
  );
};

export default TopNavigationBar;
