import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Switch, View } from "react-native";
import { ThemedText } from "../ThemedText";
const SettingsDarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const setDarkMode = () => setIsDarkMode((prev) => !prev);
  return (
    <View className="flex flex-row justify-between items-center rounded-lg p-2">
      <View className="flex flex-row items-center gap-4">
        <Feather name="sun" color={"orange"} size={20} />
        <View className="flex flex-col justify-center gap-2">
          <ThemedText className="font-bold text-xl">Dark Mode</ThemedText>
          <ThemedText className="text-base font-light">
            Switch to dark theme
          </ThemedText>
        </View>
      </View>

      <Switch
        value={isDarkMode}
        onChange={setDarkMode}
        trackColor={{ false: "red", true: "green" }}
      />
    </View>
  );
};

export default SettingsDarkModeToggle;
