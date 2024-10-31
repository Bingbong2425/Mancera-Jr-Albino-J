export interface PostCreateType {
  name: string | undefined;
  userid: string | undefined;
  userphoto?: string | undefined;
  text: string;
  photo?: string;
  countheart?: number;
  userheart?: string[]; // Assuming it's an array of user IDs
  comments?: string[]; // Assuming comments are strings
}
