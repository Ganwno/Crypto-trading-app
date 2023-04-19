import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const MarketCard = ({ id, title, subTitle, priceUsd, changePercent24Hr }) => {
  const navigation = useNavigation();

  const colorChange = () =>
    changePercent24Hr < 0
      ? "text-red-600 font-semibold"
      : "text-green-600 font-semibold";
  const apiIconUri = (subTitle) =>
    `https://coinicons-api.vercel.app/api/icon/${subTitle}`;
  return (
    <TouchableOpacity
      className="border border-gray-100 w-full h-24 bg-white shadow-sm rounded-xl flex-1 justify-center mb-2"
      onPress={() =>
        navigation.navigate("MarketItem", { title: title, subTitle: subTitle })
      }
    >
      <View className="flex flex-row justify-between items-center px-5">
        <Image
          source={{ uri: apiIconUri(subTitle.toLowerCase()) }}
          className="h-14 w-14 rounded-full"
        />
        <View className="flex-1 ml-4">
          <Text className="text-lg">{title}</Text>
          <Text className="text-small text-slate-500">
            {subTitle.toUpperCase()}
          </Text>
        </View>
        <View className="flex items-end">
          <Text className="text-base font-semibold">
            ${Number(priceUsd).toFixed(2)}
          </Text>
          <Text className={colorChange()}>
            {changePercent24Hr > 0 ? "+" : ""}
            {Number(changePercent24Hr).toFixed(2)}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MarketCard;
