import { useThemeColor } from "@/hooks/useThemeColor";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import AutoModControlCard from "./AutoModeControlCard";
import ManualModeControlCard from "./ManualModControlCard";

type ModeProp = "manual" | "auto";

const SettingsPumpControlCard = () => {
  const [mode, setMode] = useState<ModeProp>("manual");
  const borderColor = useThemeColor({}, "tint");
  return (
    <View>
      <ThemedText className="font-bold text-xl">Control Mode</ThemedText>
      <View className="flex flex-row gap-8 my-6">
        <TouchableOpacity
          style={{ borderColor: borderColor }}
          className={`p-4 border rounded-xl ${
            mode === "manual" && "!bg-green-600"
          }`}
          onPress={() => setMode("manual")}
        >
          <ThemedText className={`text-center font-bold`}>
            Manual Mode
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderColor: borderColor }}
          className={`p-4 border rounded-xl ${
            mode === "auto" && "bg-green-600"
          }`}
          onPress={() => setMode("auto")}
        >
          <ThemedText className={"text-center font-bold"}>Auto Mode</ThemedText>
        </TouchableOpacity>
      </View>
      <ThemedText>
        {mode === "auto"
          ? "Pumps will activate automatically based on moisture thresholds"
          : "Manual control of individual water pumps"}
      </ThemedText>
      <View className="mt-4">
        {mode === "auto" ? <AutoModControlCard /> : <ManualModeControlCard />}
      </View>
    </View>
  );
};

export default SettingsPumpControlCard;
