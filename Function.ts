interface searchFunction {
  (source: string, substring: string): boolean;
}
let mySearch: searchFunction;
mySearch = function (source: string, substring: string): boolean {
  let result = source.search(substring);
  return result > -1;
};
console.log(mySearch("Hello, world", "world"));
