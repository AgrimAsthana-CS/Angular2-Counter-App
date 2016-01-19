/**
 * Created by agrimasthana on 1/19/16.
 */
import {it,describe,expect,TestComponentBuilder} from 'angular2/testing';
import {evenComponent} from '../app/odd-even.component';

describe('Odd or Even Component Tests',() => {
    it('when provided with an input of 2 the status should be even', () => {
        var res = new evenComponent();
        res.onKey(2);
        expect(res.status).toEqual("even");
    });

    it('when provided with an input of 4 the status should be odd', () => {
        var res = new evenComponent();
        res.onKey(3);
        expect(res.status).toEqual("odd");
    });
});