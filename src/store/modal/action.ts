import { _removeModal, _setModal } from ".";
import store from "..";

interface ModalData {
  name: string;
  data: boolean;
}

export const setModal = (name: string, data: boolean = false) =>
  store.dispatch(_setModal({ name, data }));

export const removeModal = () => store.dispatch(_removeModal());
