#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var fs = require("fs");
function filemaker(filename) {
    fs.writeFile(filename, "", function (e) {
        if (e)
            throw e;
    });
}
exports["default"] = filemaker;
