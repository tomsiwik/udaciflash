import { Notifications } from "expo";
import { AsyncStorage } from "react-native";

const LOCAL_NOTIFICATION_ID = "tomsiwik.udaciflash";
const DONE_ON_DATE = "done.on.date";

export const pauseTodaysNotification = async () => {
  await scheduleNotification(true);
};

export const initRepeatingNotification = async () => {
  const doneDate = await AsyncStorage.getItem(DONE_ON_DATE);
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

  console.log("wat", notificationId);

  if (skipToday) await AsyncStorage.setItem(DONE_ON_DATE, today);
};
