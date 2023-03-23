const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const assert = require('assert');

describe('test 5-payment', function () {
	beforeEach('setup console.log spy', function () {
		this.log = sinon.spy(console, 'log');
	});

	afterEach('restore console.log spy', function () {
		this.log.restore();
	});

	it('test console', function () {
		sendPaymentRequestToApi(100, 20);
		assert(this.log.calledOnceWith('The total is: 120'));
	});

	it('test console', function () {
		sendPaymentRequestToApi(10, 10);
		assert(this.log.calledOnceWith('The total is: 20'));
	});
});
