import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

interface Props {
  sensorName: string;
  formattedValue: string;
  iconOne: string;
  state: string;
}
const SensorCard = ({ sensorName, formattedValue, iconOne, state }: Props) => {
  return (
    <ThemedView className="flex flex-col gap-2 p-6 rounded-xl w-full flex-1">
      <View className={"flex flex-row justify-between items-center w-full"}>
        <Feather name={iconOne as any} size={15} color={"green"} />
        <Feather
          name={
            state === "working"
              ? "bar-chart-2"
              : state === "warning"
              ? "alert-octagon"
              : "x-circle"
          }
          color={
            state === "working"
              ? "darkgreen"
              : state === "warning"
              ? "orange"
              : "darkred"
          }
          size={15}
        />
      </View>
      <ThemedText
        adjustsFontSizeToFit
        numberOfLines={1}
        className="text-4xl font-bold"
      >
        {formattedValue}
      </ThemedText>
      <ThemedText
        adjustsFontSizeToFit
        numberOfLines={1}
        className="text-sm font-semibold"
      >
        {sensorName}
      </ThemedText>
    </ThemedView>
  );
};

export default SensorCard;
