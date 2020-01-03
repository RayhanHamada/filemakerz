#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var meow = require("meow");
var filemakerz_1 = require("./filemakerz");
var helpPrompt = "\n    Usage\n        filemakerz <filename>\n\n    Example \n        filemakerz test.txt\n        OR\n        filemakerz myFolder/test.txt\n";
var cli = meow(helpPrompt, {});
// check if there's no input string
if (cli.input.length === 0) {
    console.log(helpPrompt);
}
else if (cli.input.length === 1) {
    var filePath = cli.input[0];
    filemakerz_1["default"](filePath);
}
