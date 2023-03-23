const assert = require('assert');
const calculateNumber = require('./1-calcul');


describe('calculateNumber', function () {
	describe('SUM', function () {
		it('should add a and b', function () {
			assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
		});
	});

	describe('SUBTRACT', function () {
		it('should subtract b from a', function () {
			assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
		});
	});

	describe('DIVIDE', function () {
		it('should divide a by b', function () {
			assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
		});
		it('should return Error', function () {
			assert.equal(calculateNumber('DIVIDE', 1.4, 0.0), 'Error');
		});
	});
});
