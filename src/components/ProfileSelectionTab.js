import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Line from "../components/Line";

const ProfileSelectionTab = ({ title, iconName, onPress }) => {
  return (
    <View className="flex-1">
      <TouchableOpacity
        className="flex-1 flex-row items-center justify-evenly py-5 px-3"
        onPress={() => onPress(title)}
      >
        <View className="flex-1 flex-row">
          <Icon
            name={iconName}
            size={30}
            color="#3182CE"
            className="font-bold"
          />
          <Text className="ml-3 text-2xl font-light">{title}</Text>
        </View>
        <Icon name="chevron-forward" size={18} color="gray" />
      </TouchableOpacity>
      <Line />
    </View>
  );
};

export default ProfileSelectionTab;
