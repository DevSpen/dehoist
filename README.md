# dehoist
Remove hoisting characters from a string.

### Examples
Check out the [documentation](https://example.org) for more information.

```ts
import { dehoist, dehoistStart } from "dehoist";

dehoist(".!fo;o") // "foo"
dehoistStart("!;foo!") // "foo!"
dehoistStart("!9foo") // "9foo"
```