const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');


describe('sendPaymentRequestToApi', function () {
	it('should call Utils.calculateNumber once', function () {
		const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
		const log = sinon.spy(console, 'log');

		sendPaymentRequestToApi(100, 20);

		assert(stub.calledOnceWith('SUM', 100, 20));
		assert(log.calledOnceWith('The total is: 10'));

		stub.restore()
		log.restore();
	});
});
