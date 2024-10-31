import React, { useEffect, useState } from "react";
import { socket } from "../../services/message/messages";
const Online_Offline = () => {
  const [online, setOnline] = useState([]);
  const [socketId, setSocketId] = useState<string>();

  useEffect(() => {
    socket.on("online", (data) => {
      setOnline(data);
    });

    socket.on("offline", (data) => {
      setOnline(data);
    });
    socket.on("connect", () => {
      setSocketId(socket.id);
      console.log("Socket ID:", socket.id);
    });
    return () => {
      socket.off("connect");
    };
  }, []);

  useEffect(() => {
    if (socketId) {
      socket.emit("login-user", {
        socketid: socketId,
      });

      socket.on("login-user", (data) => {
        setOnline(data);
      });
    }
  }, [socketId]);

  return { online };
};

export default Online_Offline;
