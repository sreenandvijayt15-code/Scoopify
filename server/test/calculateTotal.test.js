const calculateTotal = require("../utils/calculateTotal");

describe("calculateTotal", () => {

    test("should calculate the total price", () => {
        expect(calculateTotal(100, 2)).toBe(200);
    });

    test("should return the same price when quantity is 1", () => {
        expect(calculateTotal(100, 1)).toBe(100);
    });

    test("should return 0 when quantity is 0", () => {
        expect(calculateTotal(100, 0)).toBe(0);
    });

});