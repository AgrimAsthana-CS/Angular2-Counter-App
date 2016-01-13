/**
 * Created by agrimasthana on 1/13/16.
 */
import {Component,View} from 'angular2/core';

@Component({selector:'counter'})

@View({templateUrl:'./app/views/counter.html',
    styleUrls:['./app/styles/style.scss']})

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