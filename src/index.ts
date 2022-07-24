/**
 * Removes all hoisting characters from a string.
 * @param str The string to dehoist.
 * @returns A new string with all hoisting characters removed.
 *
 * ```ts
 * const str = "!!fo;o";
 * const newStr = dehoist(str);
 * console.log(newStr); // "foo"
 * ```
 */
export function dehoist(str: string) {
  let newStr = "";

  for (let i = 0, l = str.length; i < l; i++) {
    if (str.charCodeAt(i) < 64 && !isNumber(str[i])) continue;
    newStr += str[i];
  }

  return newStr;
}

/**
 * Removes all hoisting characters from the start string.
 * @param str The string to dehoist the start of.
 * @returns A new string with all hoisting characters at the start removed.
 *
 * ```ts
 * const str = "!!fo;o";
 * const newStr = dehoistStart(str);
 * console.log(newStr); // "fo;o"
 * ```
 */
export function dehoistStart(str: string) {
  let newStr = str;

  for (let i = 0, l = str.length; i < l; i++) {
    if (str.charCodeAt(i) > 64 || isNumber(str[i])) break;
    newStr = str.slice(i + 1);
  }

  return newStr;
}

function isNumber(n: any) {
  return !isNaN(n);
}
