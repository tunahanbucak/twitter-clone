import { useSelector } from "react-redux";

interface RootState {
  modal: {
    modal: boolean;
  };
}

export const useModal = () =>
  useSelector((state: RootState) => state.modal.modal);
