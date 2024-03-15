import { Constructor } from 'type-fest';
interface Success<T> {
    ok: true;
    result: T;
}
interface Err<E> {
    ok: false;
    result: E;
}
type Result<T, E> = Success<T> | Err<E>;
/**
 * Converts a Promise into a Result object.
 * Usefull for handling "expected" errors. If the error is not of the expected type, it will still be thrown ("unexpected" error).
 * Error type is cheked at runtime, so we have a guarantee that the error is of the expected type. No typescript cast wizardry here.
 *
 * @example
 * const result = await to(getUserData("123"), Error);
 *
 *  if (result.ok) {
 *    console.log("User data:", result.result);
 *  } else {
 *    console.error("Error:", result.result);
 *  }
 */
declare function to<T, E extends Error>(promise: Promise<T> | (() => Promise<T>), error: Constructor<E>): Promise<Result<T, E>>;
export { Success, Err, Result, to as default };
