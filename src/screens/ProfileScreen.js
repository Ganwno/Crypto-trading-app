import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import ProfileSelectionTab from "../components/ProfileSelectionTab";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 items-center">
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View className="w-96 h-60 bg-blue-600 rounded-2xl my-3">
          <View className="flex-1 items-center mt-7">
            <Image
              source={{
                uri: "https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=620&quality=85&dpr=1&s=none",
              }}
              className="h-24 w-24 rounded-full items-center"
            />
          </View>
          <View className="flex-1 items-center">
            <Text className="text-white text-xl font-bold mt-2">
              Razvan Giurgiu
            </Text>
            <Text className="text-white font-medium mt-2">
              giurgiur99@gmail.com
            </Text>
            <Text className="text-white font-medium mt-1">+40 745 233 483</Text>
          </View>
        </View>
        <View className="flex-1 justify-center pb-2">
          <ProfileSelectionTab
            iconName={"finger-print-outline"}
            title={"Personal details"}
            onPress={(title) => navigation.navigate("ProfileDetails")}
          />
          <ProfileSelectionTab iconName={"time-outline"} title={"History"} />
          <ProfileSelectionTab
            iconName={"card-outline"}
            title={"Payment details"}
          />

          <ProfileSelectionTab
            iconName={"md-notifications-outline"}
            title={"Notifications"}
          />

          <ProfileSelectionTab
            iconName={"newspaper-outline"}
            title={"Terms and Conditions"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
