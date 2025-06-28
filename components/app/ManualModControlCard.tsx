import { useState } from "react";
import { Pressable, View } from "react-native";
import { ThemedText } from "../ThemedText";
import PumpCardMM from "./PumpCardMM";

const ManualModeControlCard = () => {
  const [pumpStates, setPumpStates] = useState({
    pump1: false,
    pump2: false,
    pump3: false,
  });

  const handleStateChange = (pump: keyof typeof pumpStates) =>
    setPumpStates((prev) => ({ ...prev, [pump]: !prev[pump] }));
  const onStopAll = () =>
    setPumpStates({
      pump1: false,
      pump2: false,
      pump3: false,
    });
  const onStartAll = () =>
    setPumpStates({
      pump1: true,
      pump2: true,
      pump3: true,
    });

  return (
    <View>
      <ThemedText className="font-bold text-2xl my-4">
        Manual Pump Control
      </ThemedText>
      <View className="flex flex-col gap-5">
        <PumpCardMM
          id={1}
          unique="pump1"
          state={pumpStates.pump1}
          stateChange={(key: keyof typeof pumpStates) => handleStateChange(key)}
        />
        <PumpCardMM
          id={2}
          unique="pump2"
          state={pumpStates.pump2}
          stateChange={(key: keyof typeof pumpStates) => handleStateChange(key)}
        />
        <PumpCardMM
          id={3}
          unique="pump3"
          state={pumpStates.pump3}
          stateChange={(key: keyof typeof pumpStates) => handleStateChange(key)}
        />
      </View>
      <View className="flex flex-row basis-0 items-center gap-4 my-4">
        <Pressable
          className="bg-green-600 p-5 flex-1 basis-0 rounded-xl"
          onPress={onStopAll}
        >
          <ThemedText
            adjustsFontSizeToFit
            className="text-center font-bold text-xl"
          >
            Turn all off
          </ThemedText>
        </Pressable>
        <Pressable
          className="bg-green-600 p-5 flex-1 basis-0 rounded-xl"
          onPress={onStartAll}
        >
          <ThemedText
            adjustsFontSizeToFit
            className="text-center font-bold text-xl"
          >
            Emergency start all
          </ThemedText>
        </Pressable>
      </View>
    </View>
  );
};

export default ManualModeControlCard;
