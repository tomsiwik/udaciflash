import { Notifications } from "expo";
import { AsyncStorage } from "react-native";

const LOCAL_NOTIFICATION_ID = "tomsiwik.udaciflash";

export const pauseTodaysNotification = async () => {
  await scheduleNotification(true);
};

export const initRepeatingNotification = async () => {
  const doneDate = await AsyncStorage.getItem(LOCAL_NOTIFICATION_ID);
  scheduleNotification(doneDate ? doneDate < new Date().getDate() : false);
};

const scheduleNotification = async skipToday => {
  const notificationDate = new Date();
  const today = notificationDate.getDate();
  notificationDate.setDate(today + (skipToday ? 1 : 0));
  notificationDate.setHours(12); // Midday

  Notifications.cancelAllScheduledNotificationsAsync();

  const notificationId = Notifications.scheduleLocalNotificationAsync(
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
      time: new Date().getTime() + 10000
    }
  );

  if (skipToday) await AsyncStorage.setItem(LOCAL_NOTIFICATION_ID, today);
};
