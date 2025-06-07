import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [data, setData] = useState({
    soilMoisture: 59 / 100,
    humidity: 59 / 100,
    temperature: 35 / 100,
  });
  return (
    <SafeAreaView className={"mt-10"}>
      <View className="flex flex-row gap-1 p-2">
        <View
          className={`flex-col gap-8 bg-card px-4 py-12 rounded-[20] w-1/2 items-center`}
        >
          <ThemedText className={"text-[2rem]"}>Moisture</ThemedText>

          <Progress.Circle
            size={70}
            indeterminate={false}
            progress={data.soilMoisture}
            borderColor="none"
            allowFontScaling
            showsText
          />
        </View>
        <View
          className={`flex-col gap-8 bg-card px-4 py-12 rounded-[20] w-1/2 items-center`}
        >
          <ThemedText className={" text-[2rem]"}>Humidity</ThemedText>

          <Progress.Circle
            size={70}
            indeterminate={false}
            progress={data.humidity}
            borderColor="none"
            allowFontScaling
            showsText
          />
        </View>
      </View>

      <View
        className={`flex-row gap-2 bg-card  justify-between py-6 rounded-2xl w-full mt-1 px-12 items-center `}
      >
        <ThemedText className={"text-[2rem]"}>Temperature</ThemedText>
        <Progress.Circle
          size={80}
          indeterminate={false}
          progress={data.temperature}
          borderColor="none"
          allowFontScaling
          showsText
          formatText={(progress) => `${progress * 100}°C`}
        />
      </View>
    </SafeAreaView>
  );
}
