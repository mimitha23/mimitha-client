import { Status, StatusT, LoadingStatusT } from "interface/store/store.common";

const controlStatus = {
  loading: (): LoadingStatusT => ({
    status: Status.PENDING,
    loading: true,
    error: false,
    message: "",
  }),

  success: (stage: StatusT): LoadingStatusT => ({
    status: stage || Status.IDLE,
    loading: false,
    error: false,
    message: "",
  }),

  error: (message: string): LoadingStatusT => ({
    status: Status.FAIL,
    loading: false,
    error: true,
    message,
  }),

  default: (): LoadingStatusT => ({
    status: Status.IDLE,
    loading: false,
    error: false,
    message: "",
  }),
};

export default controlStatus;
