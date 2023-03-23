const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;


describe('test async function', function () {
	it('should return a promise', function (done) {
		getPaymentTokenFromAPI(true)
			.then((response) => {
				expect(response).to.have.property('data');
				expect(response.data).to.equal('Successful response from the API');
				done();
			});
	});
});
