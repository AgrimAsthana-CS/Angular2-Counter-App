/**
 * Created by agrimasthana on 1/19/16.
 */

import {Component, View,} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector:'weather'
})

@View({
    directives:[CORE_DIRECTIVES,FORM_DIRECTIVES],
    templateUrl:'./app/views/weather.html'
})

export class weatherComponent{
    current=null;
    constructor(public http: Http) {
    }
        getWeatherInfo(value)
        {
            this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+value+'&appid=2de143494c0b295cca9337e1e96b00e0')
                .subscribe(
                    data => this.current= (data.json().main.temp * (9/5) - 459.67).toFixed(),
                    err => console.log('Something wen wrong'+err),
                    () => console.log('success')
                );
            if(this.current === 10){
                this.current='invalid city';
            }
        }

}