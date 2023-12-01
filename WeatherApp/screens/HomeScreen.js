import React from "react";
import { View, Text, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View className="relative">
      <Image source={require("../assets/sky.jpeg")} className="h-full w-full" />
      <Text className="absolute top-0 left-0 text-6xl text-red-500">
        Home Screen
      </Text>
    </View>
  );
}
