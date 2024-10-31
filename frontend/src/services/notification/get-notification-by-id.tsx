import { NotificationModalAtom } from "../../hooks/modal-atom/notification-modal-atom";
import { notificationresponse } from "../../types/notification-type";
export const GetNotificationByID = () => {
  const { setNotificationData } = NotificationModalAtom();

  const handleGetNotification = async (userid: string | undefined) => {
    try {
      const response = await fetch(
        `http://localhost:5000/notification/${userid}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result: notificationresponse[] = await response.json();
      setNotificationData(result);
    } catch {
      console.log("error");
    }
  };

  return { handleGetNotification };
};
