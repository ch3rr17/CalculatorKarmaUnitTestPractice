/*var Calculator = function (){ };

Calculator.prototype.add = function(a, b){
    return a + b;
}

Calculator.prototype.subtract = function(a, b){
    return a - b;
}*/

var RomanCalculator = function() {};

RomanCalculator.prototype.add = function(a,b){
    
    //expand to I's    
    a = ExpandToIs(a);
    b = ExpandToIs(b);

    var sumRoman = a + b;

    sumRoman = ConvertToRoman(sumRoman);
    return sumRoman;

    function ExpandToIs(number){
        number = number.replace('IV','IIII');
        number = number.replace('V','IIIII');
        number = number.replace('IX','IIIIIIIII');
        number = number.replace('XL','IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');
        number = number.replace('L','IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');
        number = number.replace('XX','IIIIIIIIIIIIIIIIIIII');
        number = number.replace('X','IIIIIIIIII');
        
        return number;
    }

    function ConvertToRoman(sumRoman){
        //sumRoman = sumRoman.replace('IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII','XC');
        sumRoman = sumRoman.replace('IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII','L');            
        sumRoman = sumRoman.replace('IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII','XL');
        sumRoman = sumRoman.replace('IIIIIIIIIIIIIIIIIIII','XX');
        sumRoman = sumRoman.replace('IIIIIIIIII','X');
        sumRoman = sumRoman.replace('IIIIIIIII','IX');
        sumRoman = sumRoman.replace('IIIII','V');
        sumRoman = sumRoman.replace('IIII','IV');

        return sumRoman;
    }
}