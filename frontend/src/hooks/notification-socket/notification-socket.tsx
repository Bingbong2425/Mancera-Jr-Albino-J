import { useEffect, useState } from "react";
import { socket } from "../../services/message/messages";
import { notificationdata } from "../../types/notification-type";
import { NotificationModalAtom } from "../modal-atom/notification-modal-atom";
import soundNotify from "../../assets/Facebook Notification Sound Effect.mp3";
const NotificationSocket = () => {
  const notificationSound = new Audio(soundNotify); // Adjust path if needed

  const { setNotificationData } = NotificationModalAtom();
  const handleNotification = (notificationData: notificationdata) => {
    socket.emit("notifications", notificationData);
  };

  useEffect(() => {
    socket.on("notifications", (data) => {
      notificationSound.play();

      setNotificationData((prevData) => [...prevData, data]);
    });

    return () => {
      socket.off("notifications");
    };
  }, []);

  return { handleNotification };
};

export default NotificationSocket;
