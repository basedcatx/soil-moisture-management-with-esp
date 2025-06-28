import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

interface DataType {
  label: string;
  value: string;
}
interface Prop {
  data: DataType[];
  onSelect: (value: DataType) => void;
  canScroll?: boolean;
}
export const Select = ({ data, onSelect, canScroll = true }: Prop) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState("Please select an item");
  return (
    <View>
      <Pressable
        className="w-full px-2 py-4 bg-gray-300 rounded-md flex flex-row items-center justify-between"
        onPress={() => setIsOpen((prev) => !prev)}
      >
        <Text className="flex-1 text-gray-600">{itemSelected}</Text>
        <Feather
          name={isOpen ? "chevron-down" : "chevron-right"}
          size={25}
          className={`${"opacity-50"}`}
        />
      </Pressable>
      {isOpen && (
        <View className=" my-2 rounded-lg max-h-[150px] ">
          <FlatList
            scrollEnabled={canScroll}
            data={data}
            renderItem={({ item }) => {
              return (
                <Pressable
                  className="px-2 py-5 rounded-md my-1 bg-gray-800 border active:opacity-75"
                  onPress={() => {
                    onSelect(item);
                    setItemSelected(item.label);
                    setIsOpen(false);
                  }}
                >
                  <Text className="text-white font-bold">{item.label}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};
