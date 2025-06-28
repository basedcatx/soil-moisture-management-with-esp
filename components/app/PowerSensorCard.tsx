import Feather from "@expo/vector-icons/Feather";
import { cssInterop } from "nativewind";
import { Text, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

const PowerSensorCard = () => {
  cssInterop(Feather, {
    className: "style",
  });
  return (
    <ThemedView className="p-6 flex gap-4">
      <ThemedText className="font-bold text-2xl mb-4">Power Supply</ThemedText>
      <View className="flex flex-row justify-between">
        <View className="flex flex-row gap-8 items-center">
          <Feather
            name="sun"
            size={30}
            color={"orange"}
            className="animate-bounce"
          />
          <View className="flex flex-col gap-1">
            <ThemedText className="font-bold text-xl">Solar</ThemedText>
            <Text className="font-thin text-gray-500 text-md">Active</Text>
          </View>
        </View>
        <View className="border my-auto p-2 rounded-full border-green-600">
          <Feather name="activity" color={"green"} size={20} />
        </View>
      </View>
      <View className="flex flex-row flex-between">
        <View className="flex flex-row gap-8 items-center">
          <Feather
            name="zap"
            size={30}
            color={"blue"}
            className="animate-bounce"
          />
          <View className="flex flex-col gap-1">
            <ThemedText className="font-bold text-xl">AC/DC Supply</ThemedText>
            <Text className="font-thin text-gray-500 text-md">Standby</Text>
          </View>
        </View>
      </View>
    </ThemedView>
  );
};

export default PowerSensorCard;
