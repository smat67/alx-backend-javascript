const expect = require('chai').expect;
const calculateNumber = require('./2-calcul');


describe('calculateNumber', function () {
	describe('SUM', function () {
		it('should add a and b', function () {
			expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
		});
	});

	describe('SUBTRACT', function () {
		it('should subtract b from a', function () {
			expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
		});
	});

	describe('DIVIDE', function () {
		it('should divide a by b', function () {
			expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
		});
		it('should return Error', function () {
			expect(calculateNumber('DIVIDE', 1.4, 0.0)).to.equal('Error');
		});
	});
});
