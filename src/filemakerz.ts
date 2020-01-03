import * as fs from "fs";

export default function filemakerz(filename: string) {
  fs.writeFile(filename, "", e => {
    if (e) throw e;
  });
}
