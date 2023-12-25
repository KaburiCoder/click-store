interface DefaultProductQuantityArgs {
  isFit: boolean;
  step: number;
}

export function defaultProductQuantity(args: DefaultProductQuantityArgs) {
  const { isFit, step } = args;

  return isFit ? 6 : step;
}
