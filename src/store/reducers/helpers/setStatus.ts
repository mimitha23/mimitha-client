import { controlStatus } from "./";
import { LoadingStatusT, SetStatusArgsT } from "interface/store/store.common";

export default function setStatus(args: SetStatusArgsT): LoadingStatusT {
  const { stage, message, status } = args;

  return stage === "success"
    ? controlStatus.success(status || "SUCCESS")
    : stage === "error"
    ? controlStatus.error(message || "")
    : controlStatus[stage]();
}
