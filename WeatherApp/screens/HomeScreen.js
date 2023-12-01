import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text className="text-red-500 z-0">Home Screen</Text>
      <Image source={require("../assets/sky.jpeg")} className="h-full w-full" />
    </SafeAreaView>
  );
}
