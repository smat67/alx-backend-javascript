const express = require('express');


app = express();
app.use(express.json());

app.get('/', (req, res) => {
	return res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
	return res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
	return res.json({
		payment_methods: {
			credit_cards: true,
			paypal: false
		}
	});
});

app.post('/login', (req, res) => {
	const { userName } = req.body;

	if (userName) {
		return res.send(`Welcome ${userName}`);
	} else {
		return res.status(404).send();
	}
});

app.listen(7865, () => {
	console.log('API available on localhost port 7865')
})


module.exports = app;
