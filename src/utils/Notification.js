import { Notifications } from "expo";
import { AsyncStorage } from "react-native";

const LOCAL_NOTIFICATION_ID = "tomsiwik.udaciflash";

export const pauseTodaysNotification = async () => {
  await scheduleNotification(true);
};

export const initRepeatingNotification = async () => {
  // You can test it by uncommenting
  // async AsyncStorage.clear()

  const now = new Date();
  const skipDayValue = await AsyncStorage.getItem(LOCAL_NOTIFICATION_ID);
  const skipDay = !!skipDayValue ? Number(skipDayValue) : now.getTime();

  console.log("Skipping today: ", skipDay > now);

  scheduleNotification(skipDay > now);
};

const scheduleNotification = async skipToday => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(12);

  const when = skipToday ? tomorrow : today;

  await Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleLocalNotificationAsync(
    {
      title: "You haven't quizzed today",
      body: "Go on.. chop chop!",
      android: {
        sound: true,
        priority: "high"
      }
    },
    {
      repeat: "day",
      time: when.getTime() + 10000 // Avoid warning for (ms vs seconds) by just adding 10 seconds
    }
  );

  console.log("Next notification scheduled: ", when);

  await AsyncStorage.setItem(LOCAL_NOTIFICATION_ID, when.getTime().toString());
};
