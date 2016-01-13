/**
 * Created by agrimasthana on 1/13/16.
 */
import {Component} from 'angular2/core';

@Component({
    selector:'counter',
    styles:['.styled{' +
    'color:red;' +
    'text-decoration:underline;'+
    '}'],
    template: '<button (click)="increment()">+</button>&nbsp;' +
    '<button (click)="decrement()">-</button><br> <button (click)="reset()">Reset</button><br>{{counterValue}}<p class="styled">Style me for no reason</p>'
})

export class counterComponent {
    counterValue = 0;

    increment(){
        this.counterValue+=1;
    }
    decrement(){
        this.counterValue-=1;
    }

    reset(){
        this.counterValue=0;
    }
}