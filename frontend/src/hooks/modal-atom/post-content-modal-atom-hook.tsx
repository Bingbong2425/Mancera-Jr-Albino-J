import {
  postContentModalAtom,
  postContentModalAtomById,
} from "../../state/modal-atom";
import { useAtom } from "jotai";

const PostContentModalAtom = () => {
  const [open, setOpen] = useAtom(postContentModalAtom);
  const [id, setId] = useAtom(postContentModalAtomById);

  const openModal = (id: string | null) => {
    setId(id);
    setOpen(true);
  };

  const closeModal = () => {
    setId(null);
    setOpen(false);
  };

  return { open, openModal, closeModal, id };
};

export default PostContentModalAtom;
