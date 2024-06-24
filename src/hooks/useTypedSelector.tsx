import {TypedUseSelectorHook, useSelector} from "react-redux";
import { RootReducerType } from "../app/store/store";

export const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector;