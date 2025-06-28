import Feather from "@expo/vector-icons/Feather";
import { Switch, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

interface Props {
  id: number;
  unique: string;
  state: boolean;
  stateChange: (key: any) => void;
}
const PumpCardMM = ({ id, state, stateChange, unique }: Props) => {
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
        </View>
      </View>
      <View>
        <ThemedText></ThemedText>
        <Switch value={state} onValueChange={() => stateChange(unique)} />
      </View>
    </ThemedView>
  );
};

export default PumpCardMM;
