import { Notifications } from "expo";

const LOCAL_NOTIFICATION_ID = "tomsiwik.udaciflash";
const DONE_ON_DATE = "done.on.date";

const doneToday = () => {
  scheduleNotification(true);
}

const startNotification = () => {
  const doneDate = await AsyncStorage.getItem(DONE_ON_DATE);
  scheduleNotification(doneDate < new Date().getDate());
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

  await AsyncStorage.setItem(LOCAL_NOTIFICATION_ID, notificationId);
  if(skipToday) await AsyncStorage.setItem(DONE_ON_DATE, today);
};
