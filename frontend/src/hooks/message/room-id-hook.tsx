import { useEffect, useState } from "react";
import RoomId from "../../services/message/room-id";
import { messagetype } from "../../types/message-type";
import { socket } from "../../services/message/messages";
const RoomIdHook = () => {
  const [roomId, setRoomId] = useState<string>("");
  const handleRoomId = async (messageData: messagetype) => {
    try {
      const roomdid = await RoomId(messageData);

      setRoomId(roomdid);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (roomId) {
      socket.emit("sender", {
        roomid: roomId,
        userid: null,
        message: null,
        receiver: null,
      });
    }
  }, [roomId]);

  return { handleRoomId, roomId };
};

export default RoomIdHook;
