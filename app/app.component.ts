/**
 * Created by agrimasthana on 1/12/16.
 */
import {Component} from 'angular2/core';

@Component({
    selector:'counter-app',
    styles:['.styled{' +
    'color:red;' +
        'text-decoration:underline;'+
    '}'],
    template: '<h2> "Counter APP"</h2><br><button (click)="increment()">+</button>&nbsp;' +
    '<button (click)="decrement()">-</button><br>{{counterValue}}<br><p class="styled">Style me for no reason</p>'
})

export class AppComponent {
    counterValue = 0;

    increment(){
        this.counterValue+=1;
    }
    decrement(){
        this.counterValue-=1;
    }
}