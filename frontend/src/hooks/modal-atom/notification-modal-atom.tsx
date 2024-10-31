import { notificationDataAtom } from "../../state/notification-atom";
import { useAtom } from "jotai";
import { notificationresponse } from "../../types/notification-type";
export const NotificationModalAtom = () => {
  const [notificationData, setNotificationData] =
    useAtom<notificationresponse[]>(notificationDataAtom);

  return { notificationData, setNotificationData };
};
