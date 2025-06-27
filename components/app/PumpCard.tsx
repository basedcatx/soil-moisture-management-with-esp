import Feather from "@expo/vector-icons/Feather";
import { Text, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

interface Props {
  id: number;
  mode: "auto" | "manual";
  state: "scheduled" | "active" | "idle";
  nextSchedule: string;
}
const PumpCard = ({ id, mode, state, nextSchedule }: Props) => {
  const calculateStateColor = (state: string) => {
    switch (state) {
      case "scheduled":
        return "bg-green-500";
      case "idle":
        return "bg-[#80c9c0]";
      case "active":
        return "bg-blue-500";
    }
  };
  const calculateStateTextColor = (state: string) => {
    switch (state) {
      case "scheduled":
        return "text-green-900";
      case "idle":
        return "text-[#17897a]";
      case "active":
        return "text-blue-900";
    }
  };
  return (
    <ThemedView className="flex flex-row justify-between p-4 rounded-lg shadow-md">
      <View className="flex flex-row gap-8">
        <View className={`my-auto bg-green-300/30 p-2 rounded-full`}>
          <Feather name="droplet" size={30} color={"#40c81f"} />
        </View>
        <View className="flex flex-col gap-1">
          <ThemedText className="text-xl font-bold my-1">
            Water Pump {id}
          </ThemedText>
          <ThemedText className="font-light text-sm">
            Linked to moisture sensor {id}
          </ThemedText>
          <Text className="text-blue-500">Next scheduled: {nextSchedule}</Text>
        </View>
      </View>

      <View className="flex flex-row gap-2 my-auto">
        <View className="px-2 py-0.5">
          <ThemedText className="font-bold">{mode}</ThemedText>
        </View>
        <View
          className={`px-2 py-0.5 rounded-2xl ${calculateStateColor(
            state
          )}  border-black/40 border-[0.5px] text-center my-auto`}
        >
          <Text className={calculateStateTextColor(state)}>{state}</Text>
        </View>
      </View>
    </ThemedView>
  );
};

export default PumpCard;
