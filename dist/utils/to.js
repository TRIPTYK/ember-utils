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
async function to(promise, error) {
  try {
    return {
      ok: true,
      result: await (promise instanceof Promise ? promise : promise())
    };
  } catch (err) {
    // await err to make sure the error is resolved in the case of an error promise
    const resolvedError = await err;
    if (resolvedError instanceof error) {
      return {
        ok: false,
        result: resolvedError
      };
    }
    throw resolvedError;
  }
}

export { to as default };
//# sourceMappingURL=to.js.map
