import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const ProfileDetailsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-row items-start ml-3 my-3">
        <TouchableOpacity
          className="flex-1 flex-row items-center"
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={30} />
          <Text className="ml-1 text-base">Profile details</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View className="flex w-full">
          <View className="flex  justify-center items-center bg-blue-600 rounded-lg h-52 mx-6 my-4">
            <Image
              source={{
                uri: "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=620&quality=85&dpr=1&s=none",
              }}
              className="mb-2 h-24 w-24 rounded-full items-center"
            />
          </View>
        </View>
        <View className="flex mx-6 mt-4">
          <Text className="text-lg text-slate-800">Name</Text>
          <View className="flex flex-row items-center justify-center">
            <TextInput
              className="flex-1 text-lg text-slate-400 border border-slate-400 rounded-lg py-2 px-4 text-start"
              placeholder="Razvan Giurgiu"
            />
            <TouchableOpacity className="flex flex-row items-center bg-blue-600 py-3.5 px-4 rounded-lg ml-4 ">
              <Text className="text-white">Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex mx-6 mt-6">
          <Text className="text-lg text-slate-800">Email</Text>
          <View className="flex flex-row items-center justify-center">
            <TextInput
              className="flex-1 text-lg text-slate-400 border border-slate-400 rounded-lg py-2 px-4 text-start"
              placeholder="razvan.giurgiu@gmail.com"
            />
            <TouchableOpacity className="flex flex-row items-center bg-blue-600 py-3.5 px-4 rounded-lg ml-4 ">
              <Text className="text-white">Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex mx-6 mt-6">
          <Text className="text-lg text-slate-800">Name</Text>
          <View className="flex flex-row items-center justify-center">
            <TextInput
              className="flex-1 text-lg text-slate-400 border border-slate-400 rounded-lg py-2 px-4 text-start"
              secureTextEntry={true}
              placeholder="•••••••••••••"
            />
            <TouchableOpacity className="flex flex-row items-center bg-blue-600 py-3.5 px-4 rounded-lg ml-4 ">
              <Text className="text-white">Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex mt-20">
          <TouchableOpacity className="flex flex-row items-center justify-center bg-blue-600 rounded-lg px-4 h-10 mx-10">
            <Text className="text-white text-base font-medium">
              Upload new profile picture{" "}
            </Text>
            <Icon name="cloud-upload-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileDetailsScreen;
