import { atom } from "jotai";
import { notificationresponse } from "../types/notification-type";

export const notificationDataAtom = atom<notificationresponse[]>([]);
