import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootReducerType} from "../app/store/questions.slice.ts";

export const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector;