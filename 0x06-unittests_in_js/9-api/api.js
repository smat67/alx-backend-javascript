const express = require('express');


app = express();

app.get('/', (req, res) => {
	return res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
	return res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(7865, () => {
	console.log('API available on localhost port 7865')
})


module.exports = app;
