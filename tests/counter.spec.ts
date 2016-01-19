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

    });
