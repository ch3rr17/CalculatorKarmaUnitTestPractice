describe("PrimeFactors", function(){
	it("calculates the prime factors of an integer", function(){
		var primeFactors = require("../src/PrimeFactors");

		//expect to have a function called of and pf of 1
		expect(primeFactors.of(1)).toEqual([]);

	});
});