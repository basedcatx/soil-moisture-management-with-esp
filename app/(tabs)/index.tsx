import PumpCard from "@/components/app/PumpCard";
import SensorCard from "@/components/app/SensorCard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [sensors, setSensors] = useState<SensorStates>({
    moiSensorOne: "warning",
    moiSensorTwo: "warning",
    moiSensorThree: "warning",
    humSensor: "working",
    tempSensor: "warning",
  });

  return (
    <SafeAreaView className="mx-[16px]">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <ThemedView className="mt-3 relative rounded-md p-4 flex gap-2 shadow-black shadow-[2px]">
          <ThemedView className="ml-auto bg-black h-7 rounded-md px-1 justify-start relative items-center flex flex-row gap-2">
            <Octicons
              name="dot-fill"
              size={24}
              color={isConnected ? "green" : "darkred"}
              className="ease-in-out"
            />
            <ThemedText>{isConnected ? "Online" : "Offline"}</ThemedText>
          </ThemedView>

          <View className="justify-center items-center">
            <View className="bg-[#fee2e2] relative w-[100px] h-[100px] rounded-full border border-black/10 justify-center items-center">
              <MaterialCommunityIcons
                name="sprout-outline"
                size={50}
                color={"darkred"}
              />
            </View>
          </View>

          <View className="mx-auto m-2 flex items-center gap-2">
            <ThemedText className="text-3xl font-bold">Critical</ThemedText>
            <ThemedText className="text-xl">
              Soil needs extensive watering...
            </ThemedText>
          </View>
        </ThemedView>
        <ThemedText className="font-bold text-2xl my-6">Sensors</ThemedText>
        <View className="flex flex-row justify-evenly gap-4 w-full">
          <SensorCard
            sensorName="Moisture sensor 1"
            formattedValue="30%"
            state={sensors.moiSensorOne}
            iconOne="droplet"
          />
          <SensorCard
            sensorName="Moisture sensor 2"
            formattedValue="30%"
            state={sensors.moiSensorTwo}
            iconOne="droplet"
          />
          <SensorCard
            sensorName="Moisture sensor 3"
            formattedValue="30%"
            state={sensors.moiSensorThree}
            iconOne="droplet"
          />
        </View>
        <View className="flex flex-row justify-evenly gap-4 w-full my-4">
          <SensorCard
            sensorName="Temperature"
            formattedValue="20°C"
            state={sensors.tempSensor}
            iconOne="thermometer"
          />
          <SensorCard
            sensorName="Humidity"
            formattedValue="30%"
            state={sensors.humSensor}
            iconOne="wind"
          />
        </View>
        <ThemedText className="font-bold text-2xl my-6">Water Pumps</ThemedText>
        <View className="flex flex-col gap-3">
          <PumpCard id={1} mode="auto" state="active" nextSchedule="8:00 AM" />
          <PumpCard
            id={2}
            mode="auto"
            state="scheduled"
            nextSchedule="8:00 AM"
          />
          <PumpCard id={3} mode="manual" state="idle" nextSchedule="8:00 AM" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
