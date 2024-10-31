export interface messagetype {
  senderid: string | undefined;
  receiverid: string | undefined;
}

export interface messagedata {
  id: string;
  userid: string;
  message: string;
}
