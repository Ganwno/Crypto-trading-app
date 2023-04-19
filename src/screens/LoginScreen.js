import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import Line from "../components/Line";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      backgroundColor: "white",
      headerShown: false,
    });
  }, []);
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar></StatusBar>
      <SafeAreaView className="bg-white flex-1 justify-center">
        <ScrollView className="">
          <View className="flex space-y-2 mt-20">
            <View className="flex items-center justify-center pb-5">
              <Image source={require("../../assets/logo-blue.png")} />
            </View>
            <View>
              <Line />
            </View>

            <View className="mx-8 flex space-y-8 justify-center">
              <View className="">
                <Text className="text-lg roboto my-2">Email</Text>
                <TextInput
                  type="text"
                  className="rounded-lg border-transparent border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base text-left focus:ring-2 focus:ring-purple-600 focus:border-solid center"
                  name="email"
                  placeholder="razvan.giurgiu@gmail.com"
                />
              </View>
              <View>
                <Text className="text-lg roboto my-2">Password</Text>
                <TextInput
                  type="password"
                  className="rounded-lg border-transparent border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base text-left  focus:ring-2 focus:ring-purple-600 focus:border-solid"
                  name="password"
                  placeholder="•••••••••••••"
                  secureTextEntry={true}
                />
              </View>
            </View>
            <View className="items-center">
              <TouchableOpacity
                type="button"
                className="py-3 px-4 w-9/12 h-12 bg-blue-500 hover:bg-blue-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-4 mt-10 "
              >
                <Text className="text-center text-white text-base font-inter font-semibold">
                  Log in
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                type="button"
                className="py-3 px-4 w-9/12 h-12  hover:bg-blue-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
              >
                <Text className="text-center text-blue-600 text-base font-inter font-semibold">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <View className="items-center"></View>
            <View>
              <Line />
            </View>
            <View className="items-center justify-center">
              <Text className="font-inter text-base font-medium text-gray-600 ">
                Don't have an account?
              </Text>
              <TouchableOpacity>
                <Text className="text-base font-medium text-blue-500">
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
