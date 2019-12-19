// ALL THESE SPECS PASS

describe('calculator.js', function () {

    it('should add numbers to total', function () {
        const calculator = new Calculator();
        calculator.add(5);

        expect(calculator.total).toBe(5);
    });

    it('should subtract numbers from total', function () {
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);

        expect(calculator.total).toBe(25);
    });

    it('should multiply total by number', function () {
        const calculator = new Calculator();
        calculator.total = 100;
        calculator.multiply(2);

        expect(calculator.total).toBe(200);
    });

    it('should divide total by number', function () {
        const calculator = new Calculator();
        calculator.total = 200;
        calculator.divide(2);

        expect(calculator.total).toBe(100);
    });

    it('should initialize the total', function () {
        const calculator = new Calculator();

        expect(calculator.total).toBe(0);
    });

    it('should compare object', function () {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator1).toEqual(calculator2);
    });

    it('should demonstrate truthy/falsy', function () {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator1, calculator2).toBeTruthy();
        expect(calculator1.total).toBeFalsy();
    });

    it('instantiates unique object', function () {
        const calculator1 = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator1).not.toBe(calculator2);
        expect(calculator1.constructor.name).toContain("Calculator");
    });

    it('should demonstrate defined/undefined', function () {
        const calculator = new Calculator();

        expect(calculator.add).toBeDefined();
        expect(calculator.somethingNew).toBeUndefined();
    });

    it('can overwite total', function () {
        const calculator = new Calculator();
        calculator.total = null;

        expect(calculator.total).toBeNull();
    });

    it('is NaN', function () {
        const calculator = new Calculator();
        calculator.total = 20;
        calculator.multiply('a string');

        expect(calculator.total).toBeNaN();
    });

    it('throws error when dividing by 0', function () {
        const calculator = new Calculator();
        calculator.total = 20;
        // this won't work because divide by 0 error will occurr but from normal javascript:
        // expect(calculator.divide(0)).toThrow();
        expect( function() { calculator.divide(0) }).toThrow();
        // or:
        // expect(() => calculator.divide(0)).toThrow();
        expect( function() { calculator.divide(0) }).toThrowError(Error);
        // this message has to be the same thrown in our error
        expect( function() { calculator.divide(0) }).toThrowError(Error, 'Cannot divide by zero');
    });

    it('shows match and asymetric matchers', function () {
        const calculator = new Calculator();
        calculator.total = 50;
        
        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch('number');
        // asymetric matcher
        expect(calculator.total).toEqual(jasmine.anything());
        expect(() => {}).toEqual(jasmine.anything());
    });

    // custom matcher
    it('shows custom matcher', function () {

        jasmine.addMatchers(customMatchers);
        const calculator = new Calculator();

        expect(calculator).toBeCalculator(); // custom
    });

    // third party
    // missing, version issues
    // https://www.udemy.com/course/unit-testing-your-javascript-with-jasmine/learn/lecture/10595214

});
