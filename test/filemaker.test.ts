import filemaker from "./../src/filemaker";
import * as fs from "fs";
import * as path from "path";

describe("filemaker function", () => {
  it("should make a file in test directory", async () => {
    const filePath = path.join(__dirname, "test.txt");
    // call filemaker in test directory
    filemaker(filePath);

    await setTimeout(() => {
      // see if test.txt is created
      fs.exists(filePath, val => {
        expect(val).toBeTruthy();
      });
    }, 3000);

    await setTimeout(() => {
      // delete test.txt after created
      fs.unlink(filePath, err => {
        if (err) {
          throw err;
        }
      });
    }, 3000);
  });
});
