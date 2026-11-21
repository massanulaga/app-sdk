/**
 * Safely narrow unknown object and infer property existence.
 *
 * @param obj - Any value. Non-objects, functions, `null` and `undefined` return `false`.
 * @param key - A property key. A `null` or `undefined` key returns `false`.
 * @returns `true` when `obj` is a non-null object and `key in obj`, which includes
 * inherited properties and array indices or `length`.
 *
 * @example
 * hasProp({ id: 1 }, "id"); // true
 * hasProp([], "length"); // true
 * hasProp(null, "id"); // false
 */
export function hasProp<K extends PropertyKey>(
  obj: unknown,
  key: K | null | undefined,
): obj is Record<K, unknown> {
  return key != null && obj != null && typeof obj === "object" && key in obj;
}
