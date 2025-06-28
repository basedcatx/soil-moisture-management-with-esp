import { ThemedText } from "@/components/ThemedText";
import { Select } from "@/components/ui/Select";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const SettingsAddNewSchedule = () => {
  const data = [
    { label: "Pump 1", value: "1" },
    { label: "Pump 2", value: "2" },
    { label: "Pump 3", value: "3" },
  ];
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  const [time, setTime] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [days, setDays] = useState<string[]>([]);
  return (
    <View className="my-6 bg-gray-900 border-[#367e49] border-2 p-2 rounded-md flex flex-col gap-4">
      <View className="flex flex-row gap-2 items-center">
        <Feather name="plus" color={"white"} />
        <ThemedText className="font-bold text-md">
          Add new watering schedule
        </ThemedText>
      </View>
      <KeyboardAvoidingView>
        <ThemedText>Schedule name</ThemedText>
        <TextInput
          className=" border bg-gray-300 text-gray-700 rounded-sm"
          placeholder="e.g Morning Watering"
        />
      </KeyboardAvoidingView>
      <ThemedText>Water Pump</ThemedText>
      <Select data={data} onSelect={(v) => v} />
      <ThemedText className="my-4">Start Time</ThemedText>
      <KeyboardAvoidingView className="flex flex-row gap-4 justify-between">
        <Pressable
          className="flex flex-row items-center p-2 py-3 gap-4 flex-1 basis-0 placeholder:gray-300 bg-gray-300 rounded-md"
          onPress={() => setOpen(true)}
        >
          <Feather name="clock" size={20} color={"#374151"} />
          <Text className="text-gray-700 font-bold">
            {time.toLocaleTimeString()}
          </Text>
          <DateTimePickerModal
            isVisible={open}
            mode="time"
            onConfirm={(date) => {
              setTime(date);
              setOpen(false);
            }}
            onCancel={() => setOpen(false)}
          />
        </Pressable>
      </KeyboardAvoidingView>
      <ThemedText className="my-4">Days of the week</ThemedText>
      <View className="flex flex-row gap-4 flex-wrap">
        {daysOfWeek.map((item) => (
          <Pressable
            onPress={() => {
              if (days.includes(item)) {
                const newDays = days.filter((day) => day !== item);
                setDays(newDays);
              } else {
                setDays([...days, item]);
              }
            }}
            key={item}
            className={`py-2 px-4 ${
              days.includes(item) ? "bg-green-600" : "bg-green-800"
            } rounded-md`}
          >
            <ThemedText>{item}</ThemedText>
          </Pressable>
        ))}
      </View>
      <View className="flex flex-row mt-4 gap-4">
        <Pressable className="p-4 flex-1 basis-0 bg-green-800 rounded-md">
          <ThemedText className="text-center">Create new schedule</ThemedText>
        </Pressable>
        <Pressable className="p-4  flex-1 basis-0 bg-gray-700 rounded-md">
          <ThemedText className="text-center">Cancel</ThemedText>
        </Pressable>
      </View>
    </View>
  );
};
