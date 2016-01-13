/**
 * Created by agrimasthana on 1/12/16.
 */
import {Component, View} from 'angular2/core';
import {evenComponent} from './odd-even.component';
import {counterComponent} from './counter.component';

@Component({
    selector:'Main-app'
})

@View({
    templateUrl:'./app/views/main.html',
    directives:[counterComponent, evenComponent]
})

export class AppComponent {}