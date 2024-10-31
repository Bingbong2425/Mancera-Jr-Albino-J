import express, { Application } from "express";
import cors from "cors";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import userRoutes from "./routes/user-route";
import errorHandler from "./middleware/global-handle-error";
import bodyParser from "body-parser";
import profileRoutes from "./routes/profile-route";
import postRoutes from "./routes/post-route";
import messageRoutes from "./routes/message-route";
import { CreateMessage } from "./controllers/message";
import { socketmessagetype } from "./types/message-type";
import notificationRoutes from "./routes/notification-route";
import { NotificationCreate } from "./controllers/notification-controller";
const app: Application = express();

app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use("/user", userRoutes);
app.use("/profile", profileRoutes);
app.use("/post", postRoutes);
app.use("/message", messageRoutes);
app.use("/notification", notificationRoutes);

app.use(errorHandler);
const server = http.createServer(app);

const io = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let countmessage: any[] = [];
let online: any[] = [];

function findAndCount(
  roomid: string,
  userid: string | undefined,
  receiver: string | undefined
) {
  countmessage.push({ roomid, userid, receiver });

  const matchingEntries = countmessage.filter(
    (item) =>
      item.roomid === roomid &&
      item.userid === userid &&
      item.receiver === receiver
  );

  const count = matchingEntries.length;
  const uniqueSenderid = [
    ...new Set(matchingEntries.map((item) => item.userid)),
  ];
  const receiverString = uniqueSenderid.join("");
  return { count, receiverString };
}
io.on("connection", (socket) => {
  socket.on("online", async (data) => {
    const { userid } = data;
    if (!online.some((user) => user.userid === userid)) {
      online.push({ userid });
    }
    io.emit("online", online);
  });
  socket.on("login-user", async (data) => {
    const { socketid } = data;

    if (socketid !== null) {
      io.to(socketid).emit("login-user", online);
    }
  });

  socket.on("offline", async (data) => {
    const { userid } = data;

    online = online.filter((user) => user.userid !== userid);

    io.emit("offline", online);
  });

  socket.on("seen", async (data) => {
    const { roomid, receiver, userid } = data;
    socket.join(roomid);
    const matchingEntries = countmessage.filter(
      (item) =>
        item.roomid === roomid &&
        item.userid === userid &&
        item.receiver === receiver
    );

    const count = matchingEntries.length;

    countmessage = countmessage.filter(
      (item) => !(item.roomid === roomid && item.receiver === receiver)
    );

    socket.emit("seen", { count: count, receiver: receiver });
  });

  socket.on("sender", async (data: socketmessagetype) => {
    const { roomid, message, userid, receiver } = data;
    socket.join(roomid);

    const result = {
      message,
      userid,
    };

    if (message !== null && userid !== null && receiver !== null) {
      io.to(roomid).emit("receiver", result);

      socket.to(roomid).emit("notification", {
        userid: userid,
      });

      const { count, receiverString } = findAndCount(roomid, userid, receiver);
      socket.to(roomid).emit("message", {
        messagecount: count,
        uniqueReceivers: receiverString,
      });

      await CreateMessage(roomid, message, userid);
    }
  });

  socket.on("notifications", async (data) => {
    const {
      roomid,
      id,
      userpostid,
      postid,
      commentuserid,
      commentprofile,
      commentname,
      date,
    } = data;
    socket.join(roomid);

    if (
      id !== null &&
      userpostid !== null &&
      postid !== null &&
      commentuserid !== null &&
      commentprofile !== null &&
      commentname !== null &&
      date !== null
    ) {
      const data = {
        id,
        userpostid,
        postid,
        commentuserid,
        commentprofile,
        commentname,
        date,
      };

      socket.to(roomid).emit("notifications", data);
      const notificationData = {
        userpostid,
        postid,
        commentuserid,
        commentprofile,
        commentname,
        date,
      };
      await NotificationCreate(notificationData);
    }
  });
});

server.listen(5000, () => {
  console.log("Server has started on port 5000!");
});
