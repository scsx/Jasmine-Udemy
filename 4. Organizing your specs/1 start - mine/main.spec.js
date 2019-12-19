describe('main.js', function () {

    describe('calculate()', function () {

        xit('Validates expression', function () {

        });

        xit('Calls add()', function () {

        });
        

        xit('Calls subtract()', function () {

        });

        xit('Calls multiply()', function () {

        });

        xit('Calls divide()', function () {

        });

        xit('Validate operation', function () {

        });

        xit('Calls updateResult()', function () {

        });

    });

    describe('updateResult()', function () {

        beforeAll(function() {
            const element = document.createElement('div');
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
            // this this is working because it's inside a traditional function; inside an arrow function would not work
            this.element = element;
        });

        afterAll(function() {
            document.body.removeChild(this.element);
        });

        it('Adds result to DOM element', function () {
            
            updateResult('5');
            expect(this.element.innerText).toBe('5');
        });

    });

});
