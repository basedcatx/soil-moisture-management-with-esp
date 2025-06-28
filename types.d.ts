interface SensorStates {
  moiSensorOne: "working" | "warning" | "error";
  moiSensorTwo: "working" | "warning" | "error";
  moiSensorThree: "working" | "warning" | "error";
  humSensor: "working" | "warning" | "error";
  tempSensor: "working" | "warning" | "error";
}

interface PumpWaterScheduleInterface {
  state: "active" | "disabled";
  time: string;
  duration: string;
  days: string[];
}
