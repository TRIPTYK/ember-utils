import type { Constructor } from 'type-fest';

export interface Success<T> {
  ok: true;
  result: T;
}

export interface Err<E> {
  ok: false;
  result: E;
}

export type Result<T, E> = Success<T> | Err<E>;

export async function to<T, E extends Error>(
  promise: Promise<T>,
  error: Constructor<E>
): Promise<Result<T, E>> {
  try {
    const data = await promise;
    return {
      ok: true,
      result: data,
    };
  } catch (err) {
    if (err instanceof error) {
      const result_3: Result<never, E> = {
        ok: false,
        result: err as E,
      };
      return result_3;
    }
    throw err;
  }
}
