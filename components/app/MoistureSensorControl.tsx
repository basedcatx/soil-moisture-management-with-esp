import Slider from "@react-native-community/slider";
import { useState } from "react";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";
export const MoistureSensorControl = ({ id }: { id: string }) => {
  const [moisture, setMoisture] = useState(Math.random() * 100);

  return (
    <View className="flex flex-1 flex-col gap-3">
      <ThemedText className="mx-4">
        Moisture Sensor {id} - Activate pump when below: {moisture}%
      </ThemedText>
      <Slider
        value={moisture}
        onValueChange={(value) => setMoisture(value)}
        maximumValue={100}
        minimumValue={0}
        style={{ paddingBottom: 2, paddingTop: 2 }}
        step={1}
      />
    </View>
  );
};
