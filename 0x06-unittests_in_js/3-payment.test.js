const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', function () {
	it('should call Utils.calculateNumber once', function () {
		const spy = sinon.spy(Utils, 'calculateNumber');

		sendPaymentRequestToApi(100, 20);
		assert(spy.calledOnce);
		spy.restore();
	});
});
