const customMatchers = {
    toBeCalculator: function() {
        return {
            compare: function(actual) {
                const result = {
                    pass: actual instanceof Calculator,
                    message: ''
                }

                if (result.pass) {
                    result.message = 'Expected ' + actual + ' not to be instance of Calculator'; //  fail with .not
                } else {
                    result.message = 'Expected ' + actual + ' to be instance of Calculator'; // normal fail
                }

                return result;
            }
        }
    }
}