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
    onKey(value){
        if(value % 2 ==0) {this.status="even";}
        //if(typeof value=== "string" || value instanceof String){this.status="invalid"}
        else {this.status="odd";}
    }
}