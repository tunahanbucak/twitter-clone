import { _setBackgroundColor, _setBoxShadow, _setColor, _setFontSize } from ".";
import store from "..";

export const setBackgroundColor = (data: any) =>
  store.dispatch(_setBackgroundColor(data));
export const setColor = (data: any) => store.dispatch(_setColor(data));
export const setFontSize = (data: any) => store.dispatch(_setFontSize(data));
export const setBoxShadow = (data: any) => store.dispatch(_setBoxShadow(data));
