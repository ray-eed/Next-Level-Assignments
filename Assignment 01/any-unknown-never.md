# Understanding `any`, `unknown`, and `never` in TypeScript

## Introduction

In TypeScript there are multiple special types in the type system that affect how safely
values can be used.Understanding their positions in the type system helps us to prevent
runtime errors.

## Detailed Explanation

The `any` type accepts a value bypassing normal type-checking restrictions. We can
assign it to other types and call properties or methods without compiler
errors:

``` typescript
let value: any = "hello";
value.toFixed(); // Compiles, but fails at runtime
```

This flexibility is risky because TypeScript cannot protect us from the `unknown` type can hold a value of any kind,
but it does not allow operations until the value has been narrowed or checked:

``` typescript
let input: unknown = "hello";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

`unknown` is safer than `any` because it forces us to validate data
before using it. It is especially useful for values from APIs, user
input, or other untrusted sources.

The `never` type represents values that cannot occur. It commonly
appears when a function always throws new Error:

``` typescript
function fail(message: string): never {
  throw new Error(message);
}
```

In assignability terms, `never` is assignable to every type. 
But `unknown` is the safe top
type; `never` is the bottom type.

## Conclusion

We should prefer `unknown` when a value's type is not yet known, because it
requires checks before use. Then avoid casually using `any`, which removes
important safeguards. Lastly, Use `never` to model impossible values and enforce
exhaustive logic.
