const assert = require('assert');
const calculateNumber = require('./0-calcul');
const { describe, it } = require('mocha');

describe("calculateNumber", function () {
	it("should add numbers", function () {
		assert.equal(calculateNumber(1, 3), 4);
	});
	it("should add numbers", function () {
		assert.equal(calculateNumber(1, 3.7), 5);
	});
	it("should add numbers", function () {
		assert.equal(calculateNumber(1.2, 3.7), 5);
	});
	it("should add numbers", function () {
		assert.equal(calculateNumber(1.5, 3.7), 6);
	});
	it("should add negative numbers", function () {
		assert.equal(calculateNumber(-1.6, -3.7), -6);
	});
});
