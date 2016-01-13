/**
 * Created by agrimasthana on 1/12/16.
 */
import {Component} from 'angular2/core';
import {evenComponent} from './odd-even.component';
import {counterComponent} from './counter.component';

@Component({
    selector:'Main-app',
    styles:['.styled{' +
    'color:red;' +
        'text-decoration:underline;'+
    '}'],
    template: '<h2> "Counter APP"</h2><br>Here is the counter component<br>' +
    '<counter></counter><br> Here is the odd or even component<br><odd-even></odd-even>',
    directives:[evenComponent, counterComponent]
})

export class AppComponent {

}