/**
 * Created by agrimasthana on 1/15/16.
 */
import {it,describe,expect,TestComponentBuilder} from 'angular2/testing';
import {counterComponent} from '../app/counter.component';

    describe('Counter Component Tests',() =>{
        it('will have a counter variable with value 0',() =>{
            var res = new counterComponent();
            expect(res.counterValue).toEqual(0);
        });
        it('will increment the value of the counter to increase by 1',() =>{
            var res = new counterComponent();
            res.increment();
            expect(res.counterValue).toEqual(1);
        });

        it('will decrement the value of the counter to increase by 1',() =>{
            var res = new counterComponent();
            res.decrement();
            expect(res.counterValue).toEqual(-1);
        });

        it('will reset the value of the counter',() =>{
            var res = new counterComponent();
            res.counterValue=42;
            res.reset();
            expect(res.counterValue).toEqual(0);
        });

    });
