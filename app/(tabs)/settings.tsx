import SettingsDarkModeToggle from "@/components/app/SettingsDarkModeToggle";
import SettingsPumpControlCard from "@/components/app/SettingsPumpControlCard";
import { SettingsPumpWaterSchedule } from "@/components/app/SettingsPumpWaterSchedule";
import { Collapsible } from "@/components/Collapsible";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView className="mx-[16px] my-[32px]">
      <ScrollView>
        <Collapsible title="General" icon="settings" color={"lightblue"}>
          <SettingsDarkModeToggle />
        </Collapsible>
        <Collapsible
          title="Water Pump Control"
          icon="droplet"
          color={"lightblue"}
        >
          <SettingsPumpControlCard />
        </Collapsible>

        <Collapsible title="Water Schedules" icon="clock" color={"lightblue"}>
          <SettingsPumpWaterSchedule />
        </Collapsible>
      </ScrollView>
    </SafeAreaView>
  );
}
