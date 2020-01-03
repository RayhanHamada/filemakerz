"use strict";
exports.__esModule = true;
var fs = require("fs");
function filemakerz(filename) {
    fs.writeFile(filename, "", function (e) {
        if (e)
            throw e;
    });
}
exports["default"] = filemakerz;
