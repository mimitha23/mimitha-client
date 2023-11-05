interface PretendLoadingArgsT {
  ms?: number;
  triggerError?: boolean;
}

type PretendLoadingReturnT = Generator<Promise<any>>;

export default function* pretendLoading({
  triggerError = false,
  ms = 2000,
}: PretendLoadingArgsT): PretendLoadingReturnT {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      triggerError
        ? reject(new Error("triggered new error"))
        : resolve("promise resolved");
    }, ms);
  });
}
