import { profiletype } from "./profile-type";
export interface PostModalProps {
  handleClose: () => void;
  modalOpen: boolean;
  data?: profiletype | null;
}

export interface PostContentModalProps {
  id: string | null;
  handleClose: () => void;
  open: boolean;
}
