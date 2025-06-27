import { PropsWithChildren, useState } from "react";
import { TouchableOpacity, useColorScheme, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import Feather from "@expo/vector-icons/Feather";
import Svg, { Line } from "react-native-svg";

export function Collapsible({
  children,
  title,
  icon,
  color,
}: PropsWithChildren & { title: string; icon?: string; color?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? "light";
  const bgColor = useThemeColor({}, "background");

  return (
    <View className="my-4">
      <ThemedView className="rounded-xl py-2 ios:shadow-md android:elevation-sm">
        <TouchableOpacity
          onPress={() => setIsOpen((value) => !value)}
          activeOpacity={0.8}
          className="flex flex-row items-center justify-between p-5"
        >
          <View className="flex flex-row gap-4 items-center">
            {icon && (
              <Feather
                name={icon as any}
                size={20}
                color={color}
                className="opacity-85"
              />
            )}
            <ThemedText type="defaultSemiBold" className="text-2xl">
              {title}
            </ThemedText>
          </View>

          <IconSymbol
            name="chevron.right"
            size={40}
            weight="medium"
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            style={{ transform: [{ rotate: isOpen ? "90deg" : "0deg" }] }}
          />
        </TouchableOpacity>
      </ThemedView>

      {isOpen && (
        <View className="flex justify-center">
          <View className="flex flex-row justify-evenly">
            {Array.from({ length: 10 }).map((v, line) => (
              <Svg height="7" width="7" key={line}>
                <Line
                  key={line}
                  x1={0}
                  y1={0}
                  x2={0}
                  y2={7}
                  stroke={bgColor}
                  strokeWidth="4"
                />
              </Svg>
            ))}
          </View>
          <ThemedView className="rounded-xl p-5">
            <ThemedView className="">{children}</ThemedView>
          </ThemedView>
        </View>
      )}
    </View>
  );
}
