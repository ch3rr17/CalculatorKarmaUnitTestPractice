describe("Calculator", function(){
    it('should be able to add 1 and 1', function(){
        var calc = new Calculator();
        expect(calc.add(1,1)).toBe(2);
    });
});

describe("Calculator", function(){
    it('should be able to subtract 3 and 1', function(){
        var calc = new Calculator();
        expect(calc.subtract(3,1)).toBe(2);
    });
});

describe("RomanCalculator", function(){
    it('should return I plus I equals II', function(){
        var roman = new RomanCalculator();
        expect(roman.add('I','I')).toBe('II');
    });
});

describe("RomanCalculator", function(){
    it('should return I plus III equals IV', function(){
        var roman = new RomanCalculator();
        expect(roman.add('I','III')).toBe('IV');
    });
});

describe("RomanCalculator", function(){
    it('should return I plus IV equals V', function(){
        var roman = new RomanCalculator();
        expect(roman.add('I','IV')).toBe('V');
    });
});

describe("RomanCalculator", function(){
    it('should return IV plus I equals V', function(){
        var roman = new RomanCalculator();
        expect(roman.add('IV','I')).toBe('V');
    });
});

describe("RomanCalculator", function(){
    it('should return III plus II equals V', function(){
        var roman = new RomanCalculator();
        expect(roman.add('III','II')).toBe('V');
    });
});

describe("RomanCalculator", function(){
    it('should return IV plus V equals IX', function(){
        var roman = new RomanCalculator();
        expect(roman.add('IV','V')).toBe('IX');
    });
});

describe("RomanCalculator", function(){
    it('should return VI plus VII equals XIII', function(){
        var roman = new RomanCalculator();
        expect(roman.add('VI','VII')).toBe('XIII');
    });
});

describe("RomanCalculator", function(){
    it('should return IX plus IV equals XIII', function(){
        var roman = new RomanCalculator();
        expect(roman.add('IX','IV')).toBe('XIII');
    });
});

describe("RomanCalculator", function(){
    it('should return IX plus X equals XIX', function(){
        var roman = new RomanCalculator();
        expect(roman.add('IX','X')).toBe('XIX');
    });
});

describe("RomanCalculator", function(){
    it('should return XIV plus IX equals XXIII', function(){
        var roman = new RomanCalculator();
        expect(roman.add('XIV','IX')).toBe('XXIII');
    });
});

//19 +23 = 42
describe("RomanCalculator", function(){
    it('should return XIX plus XXIII equals XLII', function(){
        var roman = new RomanCalculator();
        expect(roman.add('XIX','XXIII')).toBe('XLII');
    });
});

//43 + 22 = 65
describe("RomanCalculator", function(){
    it('should return XLIII plus XXII equals LXV', function(){
        var roman = new RomanCalculator();
        expect(roman.add('XLIII','XXII')).toBe('LXV');
    });
});

describe("RomanCalculator", function(){
    it('should return XLV plus XLV equals XC', function(){
        var roman = new RomanCalculator();
        expect(roman.add('XLV','XLV')).toBe('XC');
    });
});







