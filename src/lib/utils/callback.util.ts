interface ResultWrapper<T> {
  result?: T;
  errorMessage?: string;
}

/**
 * 비동기 함수를 감싸고, 성공 또는 실패에 따라 결과를 반환하는 함수
 * @param callback 비동기 함수
 * @returns Promise<WrapperResult<T>>
 */
export async function resultWrapper<T>(
  callback: () => Promise<T>,
): Promise<ResultWrapper<T>> {
  try {
    const result = await callback();
    return { result };
  } catch (error) {
    if (error instanceof Error) {
      return {
        errorMessage: error.message,
      };
    } else {
      return {
        errorMessage: "알 수 없는 오류",
      };
    }
  }
}

/**
 * 비동기를 감싸고, 성공 또는 실패에 따라 결과를 반환하는 함수
 * @param promse 비동기 변수
 * @returns Promise<WrapperResult<T>>
 */
export async function resultWrapper2<T>(
  promise: Promise<T>,
): Promise<ResultWrapper<T>> {
  try {
    const result = await promise;
    return { result };
  } catch (error) {
    if (error instanceof Error) {
      return {
        errorMessage: error.message,
      };
    } else {
      return {
        errorMessage: "알 수 없는 오류",
      };
    }
  }
}
