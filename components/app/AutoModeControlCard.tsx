import { Pressable, Text, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { MoistureSensorControl } from "./MoistureSensorControl";

const AutoModControlCard = () => {
  return (
    <>
      <ThemedText className="font-bold text-2xl my-4">
        Moisture Thresholds
      </ThemedText>
      <View className="flex flex-col gap-5">
        <MoistureSensorControl id="1" />
        <MoistureSensorControl id="2" />
        <MoistureSensorControl id="3" />
      </View>
      <Pressable className="bg-green-500 p-4 my-4 rounded-xl active:bg-green-500/70">
        <Text className="text-center font-bold text-xl ">
          Save Threshold Settings
        </Text>
      </Pressable>
    </>
  );
};

export default AutoModControlCard;
