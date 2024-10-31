import { chatBoxOpen, countmessage, receiverId } from "../../state/chat-box";
import { useAtom } from "jotai";
const ChatBoxModalAtom = () => {
  const [open, setOpen] = useAtom(chatBoxOpen);
  const [count, setCount] = useAtom(countmessage);
  const [receiver, setReceiver] = useAtom(receiverId);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleCLose = () => {
    setOpen(false);
  };

  const handleGetMessageCount = (count: number, receiverid: string) => {
    setCount(count);
    setReceiver(receiverid);
  };

  return {
    open,
    handleCLose,
    handleOpen,
    handleGetMessageCount,
    count,
    receiver,
  };
};

export default ChatBoxModalAtom;
