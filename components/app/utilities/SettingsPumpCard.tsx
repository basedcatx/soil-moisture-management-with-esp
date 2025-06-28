import { ThemedText } from "@/components/ThemedText";
import Feather from "@expo/vector-icons/Feather";
import { FlatList, useColorScheme, View } from "react-native";

interface Prop {
  id: string;
  schedules: PumpWaterScheduleInterface[];
}
export const SettingsPumpCard = ({ id, schedules }: Prop) => {
  const theme = useColorScheme();
  return (
    <View>
      {schedules.length > 0 && (
        <FlatList
          data={schedules}
          renderItem={({ item }) => {
            return <></>;
          }}
        />
      )}

      <View className="flex flex-row gap-3 items-center my-4">
        <Feather
          name="calendar"
          color={theme === "dark" ? "white" : "dark"}
          size={20}
        />
        <ThemedText className="text-xl font-bold">Pump {id}</ThemedText>
      </View>
    </View>
  );
};
