import { notification } from "antd";

export const convertToKmPerHr = (data: number): number => {
  return Math.round(data * 3.6);
};

export const openNotificationWithIcon = (
  type: string,
  message: string,
  err: string
) => {
  if (
    type === "success" ||
    type === "warning" ||
    type === "info" ||
    type === "error"
  )
    return notification[type]({ message: message, description: err });
};

export const toTextualDescription = (wind_deg: number) => {
  const compassPoints = [
    "North",
    "North North East",
    "North East",
    "East North East",
    "East",
    "East South East",
    "South East",
    "South South East",
    "South",
    "South South West",
    "South West",
    "West South West",
    "West",
    "West North West",
    "North West",
    "North North West",
  ];
  const rawPosition = Math.floor(wind_deg / 22.5 + 0.5);
  const arrayPosition = rawPosition % 16;
  return compassPoints[arrayPosition];
};
