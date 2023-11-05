import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootStateT, DispatchT } from "./store";

export const useAppDispatch: () => DispatchT = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateT> = useSelector;
