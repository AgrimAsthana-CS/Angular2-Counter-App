/**
 * Created by agrimasthana on 1/13/16.
 */
import {Component} from 'angular2/core';

@Component({
    selector:'odd-even',
    template:'<input #box (keyup)="onKey(box.value)">' +
    '<p>{{box.value}} is {{status}}</p>'
})

export class evenComponent {
    status="";
    onKey(value){
        if(value % 2 ==0) {this.status="even";}
        else {this.status="odd";}
    }
}