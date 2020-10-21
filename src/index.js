module.exports = function reverse (n) {
    let y = Math.abs(n);
    let x = y.toString().split('').reverse().join('');
	return parseInt(x);
    }

