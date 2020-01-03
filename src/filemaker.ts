#!/usr/bin/env node

import * as fs from "fs";

export default function filemaker(filename: string) {
  fs.writeFile(filename, "", e => {
    if (e) throw e;
  });
}
