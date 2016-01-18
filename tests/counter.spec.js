var counter_component_1 = require('app/counter.component');
describe('Counter Component Tests', function () {
    it('will have a counter variable with value 0', function () {
        var res = new counter_component_1.counterComponent();
        expect(res.counterValue).toEqual(0);
    });
});
