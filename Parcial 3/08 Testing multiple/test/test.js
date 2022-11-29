const multiplicar = require("../src/funcion");
const expect = require('chai').expect;
const assert = require('chai').assert;

require('chai').should();

describe("Testear multiplicacion", () => {
    it("Multiplicaciones", () => {
        expect(multiplicar(5, 5)).to.equal(25);
    });

    it("Multiplicar 5 por 5", () => {
        assert.equal(multiplicar(10, 50), 500);
    });

    it("Multiplicar 5 por 5", () => {
        const x = multiplicar(4,4);
        x.should.equal(16)

    });
});
