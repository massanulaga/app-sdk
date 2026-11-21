import { describe, expect, test } from "vitest";

import { hasProp } from "./has-prop";

const sym = Symbol("k");

describe("hasProp", () => {
  test.each([
    {
      obj: { a: 1 },
      key: "a",
      expected: true,
    },
    {
      obj: { a: 1 },
      key: "b",
      expected: false,
    },
    {
      obj: null,
      key: "a",
      expected: false,
    },
    {
      obj: undefined,
      key: "a",
      expected: false,
    },
    {
      obj: "str",
      key: "length",
      expected: false,
    },
    {
      obj: 42,
      key: "a",
      expected: false,
    },
    {
      obj: { a: 1 },
      key: null,
      expected: false,
    },
    {
      obj: { a: 1 },
      key: undefined,
      expected: false,
    },
    {
      obj: { null: 1 },
      key: null,
      expected: false,
    },
    {
      obj: { undefined: 2 },
      key: undefined,
      expected: false,
    },
    {
      obj: { 1: "x" },
      key: 1,
      expected: true,
    },
    {
      obj: { [sym]: 1 },
      key: sym,
      expected: true,
    },
    {
      obj: [],
      key: "length",
      expected: true,
    },
    {
      obj: () => {},
      key: "name",
      expected: false,
    },
  ])("Checks key $key on $obj: $expected", ({ obj, key, expected }) => {
    expect(hasProp(obj, key)).toBe(expected);
  });

  test("counts inherited properties", () => {
    expect(hasProp({}, "toString")).toBe(true);
  });
});
