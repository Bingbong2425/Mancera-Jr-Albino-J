import { messagetype } from "../../types/message-type";
const RoomId = async (roomid: messagetype) => {
  const response = await fetch("http://localhost:5000/message/roomid", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(roomid),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error);
  }
  return result;
};

export default RoomId;
