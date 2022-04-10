const stringCalculator= require("./stringCalculator")

describe("stringCalculator",()=>{
    it("return 0 for empty string",()=>{
        expect(stringCalculator("")).toBe(0);
    });
    it("if single number in string return number",()=>{
        expect(stringCalculator("3")).toBe(3);
    });
});
