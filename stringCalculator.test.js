const stringCalculator= require("./stringCalculator")

describe("stringCalculator",()=>{
    it("return 0 for empty string",()=>{
        expect(stringCalculator("")).toBe(0);
    });
});