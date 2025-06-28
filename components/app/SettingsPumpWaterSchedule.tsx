import Feather from "@expo/vector-icons/Feather";
import { Pressable, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { SettingsAddNewSchedule } from "./utilities/SettingsAddNewSchedule";

export const SettingsPumpWaterSchedule = () => {
  return (
    <ThemedView className="p-2">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-col gap-3">
          <ThemedText className="font-bold text-xl">
            Active Schedules
          </ThemedText>
          <ThemedText className="font-extralight text-sm">
            Set automatic watering times for each pump
          </ThemedText>
        </View>
        <Pressable className="p-2 bg-green-600 flex flex-row gap-3 items-center rounded-md">
          <Feather name="plus" color={"white"} />
          <ThemedText className="text-sm font-bold">Add schedule</ThemedText>
        </Pressable>
      </View>

      {/* We can start playing with our magic under here. But before that. */}
      <SettingsAddNewSchedule />
    </ThemedView>
  );
};
