export type messages = {
  userid: string;
  message: string;
};

export type socketmessagetype = {
  userid?: string | undefined;
  receiver?: string;
  message?: string | undefined;
  roomid: string;
};
