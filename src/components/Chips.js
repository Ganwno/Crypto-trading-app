import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

const Chips = ({ values, onPress, unit }) => {
  const [selectedValue, setSelectedValue] = useState(0);

  return (
    <View className="flex flex-row px-3 justify-between mt-6">
      {values.map((val) => (
        <TouchableOpacity
          key={`chip-${val}`}
          onPress={() => {
            setSelectedValue(val);
            return onPress(val);
          }}
          className={`py-2 px-3 rounded-full border border-slate-300 flex items-center ${
            selectedValue === val ? "bg-blue-600" : ""
          }`}
        >
          <Text
            className={` ${
              selectedValue === val ? "text-white" : " text-slate-800"
            } `}
          >
            {val}
            {unit}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Chips;
