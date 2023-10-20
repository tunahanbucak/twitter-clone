import { useSelector } from "react-redux";
import { RootStateType } from "..";
export const useCurrentAccount = () =>
  useSelector((state: RootStateType) => state.auth.currentAccount);
export const useAccounts = () =>
  useSelector((state: RootStateType) => state.auth.accounts);
