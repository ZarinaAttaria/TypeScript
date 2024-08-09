var mySearch;
mySearch = function (source, substring) {
    var result = source.search(substring);
    return result > -1;
};
console.log(mySearch("Hello, world", "Zarina"));
