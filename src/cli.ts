#!/usr/bin/env node

const meow = require("meow");
import filemakerz from "./filemakerz";

const helpPrompt = `
    Usage
        filemakerz <filename>

    Example 
        filemakerz test.txt
        OR
        filemakerz myFolder/test.txt
`;

const cli = meow(helpPrompt, {});

// check if there's no input string
if (cli.input.length === 0) {
  console.log(helpPrompt);
} else if (cli.input.length === 1) {
  const filePath = cli.input[0];
  filemakerz(filePath);
}
