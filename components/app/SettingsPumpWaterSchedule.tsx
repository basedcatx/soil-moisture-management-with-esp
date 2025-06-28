import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Modal, Pressable, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { SettingsAddNewSchedule } from "./utilities/SettingsAddNewSchedule";

export const SettingsPumpWaterSchedule = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalCancel = () => setModalIsOpen(false);
  return (
    <ThemedView className="p-2">
      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-col gap-3">
          <ThemedText className="font-bold text-xl">
            Active Schedules
          </ThemedText>
          <ThemedText className="font-extralight text-sm">
            Set automatic watering times for each pump
          </ThemedText>
        </View>
        <Pressable
          className="p-2 bg-green-600 flex flex-row gap-2 py-4 px-2 items-center rounded-md"
          onPress={() => setModalIsOpen(true)}
        >
          <Feather name="plus" color={"white"} size={20} />
          <ThemedText className="text-sm font-bold">Add schedule</ThemedText>
        </Pressable>
      </View>

      {/* We can start playing with our magic under here. But before that. */}
      {/* First we display the modal, then we display the list of active schedules. */}

      <Modal
        visible={modalIsOpen}
        animationType="slide"
        transparent
        onRequestClose={() => setModalIsOpen(false)}
        className="flex justify-center items-center flex-1"
      >
        <SettingsAddNewSchedule onCancel={handleModalCancel} />
      </Modal>
      {/* Anyways i felt bored about the whole learning thing here and decided to move on to something i really wanted to do. Unless someone really needs this project, i won't come back to it. Here is a reference website: https://v0-react-native-ui-design-sooty.vercel.app/settings */}
      {/*  Love y'all mwahhh and make sure to refactor all the components and stuff, plus fix any styles you think isn't good enough, everything just bored me out, sorry :{*/}
    </ThemedView>
  );
};
