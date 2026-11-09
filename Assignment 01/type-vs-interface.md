# Type Aliases vs. Interfaces in TypeScript

## Introduction

TypeScript provides both `type` aliases and `interface` declarations to
describe the shape of data. Although their usage might look the same in 
some cases , especially when defining objects.
In reality they have different roles to play when coding and by knowing 
those rules we can code more efficiently.

## Detailed Explanation

An interface is primarily designed to describe object shapes. It can be
extended with `extends`, allowing one interface to build on another:

``` typescript
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

A type alias can describe an object too, but it can also represent
unions, intersections, primitives, tuples, and other types:

``` typescript
type Status = "pending" | "approved" | "rejected";
type Point = [number, number];
type UserWithRole = User & { role: string };
```

One important difference is declaration merging. If an interface with
the same name is declared more than once, TypeScript combines its
members. Type aliases cannot be reopened this way. This makes interfaces
useful when designing extensible object contracts, including public
library APIs.

```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Rakib",
  age: 22
};

console.log(user);
```

**Output:**
```text
{ name: "Rakib", age: 22 }
```

Here, TypeScript combines both `User` declarations, so the `User` interface contains both `name` and `age`.

However, we cannot declare the same type alias twice:

```typescript
type Person = {
  name: string;
};

// Error: Duplicate identifier 'Person'
type Person = {
  age: number;
};
```

Both approaches support composition, but their syntax differs:
interfaces commonly use `extends`, while type aliases often use
intersection (`&`). We can compare between which is better, 
it depends on what the programmer is trying to achieve

## Conclusion

If you want to describe objects that may be extended
or merged then choose `interface` when or else if you 
need you need unions, tuples, primitives, or more complex 
type combinations choose `type` when . For ordinary object 
shapes, either is valid. The consistency within a project matters most.
