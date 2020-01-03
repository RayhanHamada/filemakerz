#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var meow = require("meow");
var filemaker_1 = require("./filemaker");
var helpPrompt = "\n    Usage\n        filemaker <filename>\n\n    Example \n        filemaker test.txt\n        OR\n        filemaker myFolder/test.txt\n";
var cli = meow(helpPrompt, {});
// check if there's no input string
if (cli.input.length === 0) {
    console.log(helpPrompt);
}
else if (cli.input.length === 1) {
    var filePath = cli.input[0];
    filemaker_1["default"](filePath);
}
