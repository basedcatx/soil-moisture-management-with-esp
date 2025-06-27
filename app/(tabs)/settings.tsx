import SettingsDarkModeToggle from "@/components/app/SettingsDarkModeToggle";
import SettingsPumpControlCard from "@/components/app/SettingsPumpControlCard";
import { Collapsible } from "@/components/Collapsible";
import { ScrollView, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const theme = useColorScheme();
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
          <SettingsPumpControlCard />
        </Collapsible>
      </ScrollView>
    </SafeAreaView>
  );
}
