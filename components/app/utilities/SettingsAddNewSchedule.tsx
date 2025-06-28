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

export const SettingsAddNewSchedule = ({
  onCancel,
}: {
  onCancel: () => void;
}) => {
  const data = [
    { label: "Pump 1", value: "1" },
    { label: "Pump 2", value: "2" },
    { label: "Pump 3", value: "3" },
  ];
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  const [time, setTime] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [days, setDays] = useState<string[]>([]);
  // For type safety, it is advised to create a pump type, listing all the number of pumps you are gonna support in your project.
  // Unless really needed, i might have to refactor this codebase to fix some of these sort of issues, if the need ever arises.
  const [form, setForm] = useState<WaterPumpScheduleInterface>({
    name: "",
    duration: "",
    time: "",
    pump: "",
    days: [],
  });
  return (
    <View className="bg-gray-900 border-[#367e49] border-2 p-2 rounded-md flex flex-col gap-2 my-auto px-4 mx-4">
      <View className="flex flex-row gap-2 items-center mb-4">
        <Feather name="plus" color={"#367e49"} size={30} />
      </View>

      <KeyboardAvoidingView className="flex flex-col gap-2 mb-6">
        <ThemedText className="font-bold text-lg">Schedule name</ThemedText>
        <TextInput
          className=" border bg-gray-300 text-gray-700 rounded-md py-4"
          placeholder="e.g Morning Watering"
        />
      </KeyboardAvoidingView>

      <View className="flex flex-col gap-2 mb-4">
        <ThemedText className="font-bold text-lg">Water Pump</ThemedText>
        <Select data={data} onSelect={(v) => v} />
      </View>

      {/* Never do this on a production system.  */}

      <View className="flex items-center flex-row gap-8">
        <ThemedText className="font-bold text-lg flex-1 basis-0">
          Start Time
        </ThemedText>
        <ThemedText className="font-bold text-lg flex-1 basis-0">
          Duration (mins)
        </ThemedText>
      </View>

      <KeyboardAvoidingView className="flex flex-row gap-4 justify-between mb-4">
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
        <TextInput
          className="flex flex-1 basis-0 bg-gray-300 rounded-md"
          placeholder="eg. 30 (mins)"
          value={form.duration}
          inputMode="numeric"
          onChangeText={(text) =>
            setForm((form) => ({ ...form, duration: text }))
          }
        />
        {/* We can do some sort of type validation by making sure the input type is always numeric */}
      </KeyboardAvoidingView>

      <ThemedText className="text-xl font-bold">Days of the week</ThemedText>
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
        <Pressable
          className="p-4  flex-1 basis-0 bg-gray-700 rounded-md active:opacity-75"
          onPress={() => {
            setOpen(false);
            onCancel();
          }}
        >
          <ThemedText className="text-center">Cancel</ThemedText>
        </Pressable>
      </View>
    </View>
  );
};
