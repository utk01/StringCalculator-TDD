const stringCalculator= require("./stringCalculator")

describe("stringCalculator",()=>{
    it("return 0 for empty string",()=>{
        expect(stringCalculator("")).toBe(0);
    });
    it("if single number in string return number",()=>{
        expect(stringCalculator("3")).toBe(3);
    });
    it("if two comma seprated numbers in string return their sum",()=>{
        expect(stringCalculator("1,3")).toBe(4);
    });

});
