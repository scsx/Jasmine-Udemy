describe('calculator.js ', function () {

    // New instance in each specso we don't use the same one and compromise tests
    it('should add number to total ', function () {
        const calculator = new Calculator();
        calculator.add(5);
        // expect total to be 5:
        expect(calculator.total).toBe(5);
        // something else
        expect(5 + 5).toBe(10);
    });

    it('should subtract number from total ', function () {
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);
        // expect total to be 25:
        expect(calculator.total).toBe(25);
    });

    it('should multiply number by total ', function () {
        const calculator = new Calculator();
        calculator.total = 100;
        calculator.multiply(2);
        // expect total to be 200:
        expect(calculator.total).toBe(200);
    });

    it('should divide total by number', function () {
        const calculator = new Calculator();
        calculator.total = 200;
        calculator.divide(20);
        // expect total to be 10:
        expect(calculator.total).toBe(10);
    });

});
