/**
 * Created by agrimasthana on 1/13/16.
 */
import {Component,View} from 'angular2/core';
//This is the <tag> that will be injected in the html to load the @Component
@Component({selector:'counter'})

//We use the @View annotation to to specify the location of the template URl and style URl
@View({templateUrl:'./app/views/counter.html',
    styleUrls:['./app/styles/style.scss']})

//We put all out javascript logic into a class and export it as a part of the component
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