import { useSelector } from "react-redux";

interface RootState {
  appearance: {
    boxShadow: string;
    fontSize(arg0: string, fontSize: any): unknown;
    color: any;
    backgroundColor: any;
    appearance: boolean;
  };
}
export const useAppearance = () =>
  useSelector((state: RootState) => state.appearance);
