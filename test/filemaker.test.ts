import filemaker from "./../src/filemaker";
import * as fs from "fs";
import path from "path";

describe("filemaker function", () => {
  it("should make a file in test directory", () => {
    const filePath = path.join(__dirname, "test.txt");
    // call firemaker in test directory
    filemaker(filePath);

    // see if test.txt is created
    fs.exists(filePath, val => {
      expect(val).toBeTruthy();
    });

    // delete test.txt after created
    fs.unlink(filePath, err => {
      if (err) {
        throw err;
      }
    });
  });
});
