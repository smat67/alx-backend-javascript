const request = require("request");
const expect = require("chai").expect;

describe("Index page", function() {
	const options = {
		url: "http://localhost:7865/",
		method: "GET"
	};

  it("check correct status code", function(done) {
		request(options, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
		});
	});

  it("check correct content", function(done) {
		request(options, function(err, res, body) {
	    expect(body).to.contain("Welcome to the payment system");
	    done();
		});
  });
  
	it("check correct content length", function (done) {
		request(options, function(err, res, body) {
	    expect(res.headers['content-length']).to.equal('29');
	    done();
		});
  });
});


describe("cart page", function() {
	const options1 = {
		url: "http://localhost:7865/cart/2",
		method: "GET"
	};

	const options2 = {
		url: "http://localhost:7865/cart/hey",
		method: "GET"
	};

  it("id is a number", function(done) {
		request(options1, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
		});
	});

	it("check correct output", function (done) {
		request(options1, function(err, res, body) {
	    expect(body).to.contain('Payment methods for cart 2');
	    done();
		});
  });

  it("id is not a number", function(done) {
		request(options2, function(err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
		});
  });
});


describe("login page", function() {
	const options = {
		url: "http://localhost:7865/login",
		method: "POST",
		json: true,
		body: {userName: "John"}
	};

  it("check correct status code", function(done) {
		request(options, function (err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
		});
	});

  it("check correct content", function(done) {
		request(options, function(err, res, body) {
	    expect(body).to.equal("Welcome John");
	    done();
		});
  });
});


describe("available_payments page", function() {
	const options = {
		url: "http://localhost:7865/available_payments",
		method: "GET",
		json: true
	};

  it("check correct status code", function(done) {
		request(options, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
		});
	});

  it("check correct content", function(done) {
		request(options, function(err, res, body) {
			expect(body).to.deep.equal(({
				payment_methods: {
					credit_cards: true,
					paypal: false
				}
			}));
	    done();
		});
  });
});
