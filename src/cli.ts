#!/usr/bin/env node

const meow = require("meow");
import filemaker from "./filemaker";

const helpPrompt = `
    Usage
        filemaker <filename>

    Example 
        filemaker test.txt
        OR
        filemaker myFolder/test.txt
`;

const cli = meow(helpPrompt, {});

// check if there's no input string
if (cli.input.length === 0) {
  console.log(helpPrompt);
} else if (cli.input.length === 1) {
  const filePath = cli.input[0];
  filemaker(filePath);
}
