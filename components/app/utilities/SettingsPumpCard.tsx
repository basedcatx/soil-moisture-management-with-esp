import { ThemedText } from "@/components/ThemedText";
import Feather from "@expo/vector-icons/Feather";
import { useColorScheme, View } from "react-native";

interface Prop {
  id: string;
  schedules: PumpWaterScheduleInterface[];
}
export const SettingsPumpCard = ({ id, schedules }: Prop) => {
  const theme = useColorScheme();
  return (
    <View>
      <View className="flex flex-row gap-3 items-center my-4">
        <Feather
          name="calendar"
          color={theme === "dark" ? "white" : "dark"}
          size={20}
        />
              <ThemedText className="text-xl font-bold">Pump 1</ThemedText>
      </View>
    </View>
  );
};
