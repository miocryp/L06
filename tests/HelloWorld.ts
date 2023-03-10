import { expect } from "chai";


describe("My Title", () => {
    it("Should work", () => {
        return true;
    })
    it("1 + 1 should equal to 2", () => {
        expect(1 + 1).to.equal(2);
    })   
    it("1 + 1 should not equal to 3", () => {
        expect(1 + 1).to.not.equal(3)
        })
});
