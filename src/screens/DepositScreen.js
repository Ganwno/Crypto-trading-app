import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Chips from "../components/Chips";

const KeyPad = ({ val, onPress }) => {
  return (
    <TouchableOpacity
      className="flex-1 px-3 py-3 items-center"
      onPress={() => onPress(val)}
    >
      {val === "back" ? (
        <Icon name="backspace-outline" size={38} />
      ) : (
        <Text className="text-4xl font-semibold">{val}</Text>
      )}
    </TouchableOpacity>
  );
};

const DepositAndWidthdrawScreen = ({ route }) => {
  const action = route.params.action;

  const navigation = useNavigation();
  const [sum, setSum] = useState(0);
  const [currentBalance, setCurrnetBalance] = useState(10000);
  const [actionButtonIsEnabled, setActionButtonIsEnabled] = useState(true);

  const addDigit = (value) => {
    let newSum;
    if (value === "") return;
    value === "back"
      ? (newSum = parseInt(sum / 10))
      : (newSum = sum * 10 + value);
    setSum(newSum);
    newSum > currentBalance && action === "widthdraw"
      ? setActionButtonIsEnabled(false)
      : setActionButtonIsEnabled(true);
  };

  const [selectedPercentValue, setSelectedPercentValue] = useState(0);

  const setSelectedPercent = (value) => {
    setSelectedPercentValue(value);
    setSum(currentBalance * (value / 100));
  };

  const percentValue = [0, 10, 25, 50, 75, 100];
  return (
    <View className="flex-1">
      <StatusBar />
      <SafeAreaView className="flex-1">
        <View className="flex flex-row items-start ml-3 my-3">
          <TouchableOpacity
            className="flex-1 flex-row items-center"
            onPress={() => navigation.goBack()}
          >
            <Icon name="chevron-back" size={30} />
            {action === "deposit" ? (
              <Text className="ml-1 text-base">Deposit USD</Text>
            ) : (
              <Text className="ml-1 text-base">Withdraw USD</Text>
            )}
          </TouchableOpacity>
        </View>
        <View className="flex items-center mt-14 space-y-6">
          <Text className="text-slate-700">Enter Amount in USD</Text>
          <Text
            className={`text-5xl font-semibold ${
              sum > currentBalance && action === "widthdraw"
                ? "text-red-600"
                : " "
            }`}
          >
            ${sum}
          </Text>
          <Text className="text-slate-700">Min $10 - Max $10,000</Text>
          <Text className="text-lg font-medium">
            Current Balance: ${currentBalance}
          </Text>
        </View>
        <Chips
          onPress={(selectedValue) =>
            setSum((currentBalance * selectedValue) / 100)
          }
          values={[0, 25, 50, 75, 100]}
          unit="%"
        />
        {/* Keyboard */}
        <View className="flex-1 mb-8">
          <View className="flex-1 justify-end ">
            <View className="flex flex-row">
              {[1, 2, 3].map((val) => (
                <KeyPad
                  key={`keypad-${val}`}
                  val={val}
                  onPress={(val) => addDigit(val)}
                />
              ))}
            </View>
            <View className="flex flex-row">
              {[4, 5, 6].map((val) => (
                <KeyPad
                  key={`keypad-${val}`}
                  val={val}
                  onPress={(val) => addDigit(val)}
                />
              ))}
            </View>
            <View className="flex flex-row">
              {[7, 8, 9].map((val) => (
                <KeyPad
                  key={`keypad-${val}`}
                  val={val}
                  onPress={(val) => addDigit(val)}
                />
              ))}
            </View>
            <View className="flex flex-row">
              {["", 0, "back"].map((val) => (
                <KeyPad
                  key={`keypad-${val}`}
                  val={val}
                  onPress={(val) => addDigit(val)}
                />
              ))}
            </View>
          </View>
          <View className="flex items-center mt-8">
            {action === "deposit" ? (
              <TouchableOpacity
                className={`items-center justify-center w-96 h-14 bg-blue-600 rounded-lg ${
                  actionButtonIsEnabled === true ? "" : "opacity-50"
                }`}
                disabled={actionButtonIsEnabled === false}
              >
                <Text className="text-white text-lg font-semibold">
                  DEPOSIT USD
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                className={`items-center justify-center w-96 h-14 bg-blue-600 rounded-lg ${
                  actionButtonIsEnabled === true ? "" : "opacity-50"
                }`}
                disabled={actionButtonIsEnabled === false}
              >
                <Text className="text-white text-lg font-semibold">
                  WITHDRAW USD
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DepositAndWidthdrawScreen;
