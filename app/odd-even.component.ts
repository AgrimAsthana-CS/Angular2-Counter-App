/**
 * Created by agrimasthana on 1/13/16.
 */
import {Component, View} from 'angular2/core';

@Component({
    selector:'odd-even'
})

@View({
    templateUrl:'./app/views/oddeve.html'
})
export class evenComponent {
    status="";
    box="some other string";
    onKey(value){
        console.log(this.box);
        if(value % 2 ==0) {this.status="even";}
        else {this.status="odd";}
    }
}