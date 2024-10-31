export interface notificationdata {
  roomid: string | undefined;
  id: string;
  userpostid: string | undefined;
  postid: string | undefined;
  commentuserid: string | undefined;
  commentprofile: string | undefined;
  commentname: string | undefined;
  date: string;
}

export interface notificationresponse {
  id: string;
  userpostid: string;
  postid: string;
  commentuserid: string;
  commentprofile: string;
  commentname: string;
  date: string;
}
