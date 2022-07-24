# dehoist

Remove hoisting characters from a string.

### Installation

Install dehoist with your preferred package manager.

```sh
npm install dehoist
yarn add dehoist
pnpm add dehoist
```

### Examples

Check out the [documentation](https://devspen.github.io/dehoist/) for more information.

```ts
import { dehoist, dehoistStart } from "dehoist";

dehoist(".!fo;o"); // "foo"
dehoistStart("!;foo!"); // "foo!"
dehoistStart("!9foo"); // "9foo"
```
