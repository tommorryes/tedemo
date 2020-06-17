"use strict";
function demo() {
    console.log("0");
}
function demo2() {
    throw new Error("000");
}
function demo3(name, sex) {
    var strs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        strs[_i - 2] = arguments[_i];
    }
    console.log(name + sex + strs);
}
function jump(cityname) {
    console.log(cityname);
    return cityname;
}
function jump2(cityname, num) {
    if (cityname === void 0) { cityname = 'gyz'; }
    console.log(cityname);
    return cityname;
}
function jump3(undefined, num) {
    return undefined;
}
var jumps = demo3('', 0, 0);
