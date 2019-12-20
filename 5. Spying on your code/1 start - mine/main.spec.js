// ALL TESTS PASS

describe('main.js', function () {
    describe('calculate()', function () {

        it('validates expression when 1st number is invalid', function() {
            // updateResult() is global and so lives in the window:
            // .and.stub(): "just track and listen to calls for the method, dont return or do anything"; it's the default,can be omitted
            spyOn(window, 'updateResult').and.stub();
            calculate('a + 3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            // nr of times something is called
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('validates expression when 2nd number is invalid', function() {
            spyOn(window, 'updateResult')

            calculate('3 + a');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('validates expression when operation is invalid', function() {
            spyOn(window, 'updateResult')
            calculate('5___3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('calls add', function() {
            // we dont have an instance, we have to spy on the class itself:
            // spyOn(Calculator.prototype, 'add');
            // can be var, called like: expect(spy).toHaveBeenCalledTimes(2);
            const spy = spyOn(Calculator.prototype, 'add');
            calculate('111 + 222');
            // add is called2 times: add numberA and add numberB
            expect(spy).toHaveBeenCalledTimes(2);
            // first call
            expect(spy).toHaveBeenCalledWith(111);
            // second call
            expect(spy).toHaveBeenCalledWith(222);
        });

        it('calls subtract', function() {
            const spy = spyOn(Calculator.prototype, 'subtract');
            calculate('10 - 20');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(20);
        });

        it('calls multiply', function() {
            const spy = spyOn(Calculator.prototype, 'multiply');
            calculate('3 * 8');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(8);
            expect(spy).not.toHaveBeenCalledWith(3);
        });
        it('calls divide', function() {
            const spy = spyOn(Calculator.prototype, 'divide');
            calculate('3 / 80');
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(80);
        });

        // xit('validates operation');

        it('calls updateResult (example using and.callThrough)', function() {
            spyOn(window, 'updateResult');
            // you shouldn't call the real function but sometimes you need:
            spyOn(Calculator.prototype, 'multiply').and.callThrough();
            calculate('5 * 5');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(25);
        });

        it('calls updateResult (example using and.callFake)', function() {
            spyOn(window, 'updateResult');
            // dummyArg because multiply needs an argument
            spyOn(Calculator.prototype, 'multiply').and.callFake(function(dummyArg) {
                return 'Some string you want';
            });
            calculate('2 * 2');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Some string you want');
        });

        it('calls updateResult (example using and.returnValue)', function() {
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.returnValue('Some string as value');
            calculate('6 * 6');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Some string as value');
        });

        it('calls updateResult (example using and.returnValues (S))', function() {
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'add').and.returnValues(null, 'whatever add returns');
            calculate('7 + 7');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('whatever add returns');
        });

        it('does not handle errors', function() {
            spyOn(Calculator.prototype, 'multiply').and.throwError('some error');
            expect(function() { calculate('5 * 5') }).toThrowError('some error');
        });

    });

    describe('updateResult()', function () {
        beforeAll(function () {
            // Executed ONCE before all specs inside this suite are executed.
            const element = document.createElement('div');
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
            this.element = element;
        });

        afterAll(function () {
            // Executed ONCE after all specs inside this describe are executed.
            document.body.removeChild(this.element);
        });

        it('adds result to DOM element', function () {
            updateResult('5');

            expect(this.element.innerText).toBe('5');
        });
    });
});
