import { strictEqual } from "node:assert";
import { dehoist, dehoistStart } from ".";

// TESTS
strictEqual(dehoist(".!fo;o"), "foo");
strictEqual(dehoistStart("!;foo!"), "foo!");
strictEqual(dehoistStart("!9foo"), "9foo");

// ON SUCCESS
console.info("All tests passed.");