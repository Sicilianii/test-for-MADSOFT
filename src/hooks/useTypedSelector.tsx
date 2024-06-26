import {TypedUseSelectorHook, useSelector} from "react-redux";
import { StateType } from "../app/store/store";

export const useTypedSelector: TypedUseSelectorHook<StateType> = useSelector;