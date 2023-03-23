module.exports = function calculateNumber(type, a, b) {
	let numA = Math.round(a);
	let numB = Math.round(b);

	switch (type) {
		case 'SUM':
			return numA + numB;
		case 'SUBTRACT':
			return numA - numB;
		case 'DIVIDE':
			if (numB == 0) return "Error";
			return numA / numB;
	}
}
