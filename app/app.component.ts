/**
 * Created by agrimasthana on 1/12/16.
 */
import {Component, View} from 'angular2/core';
import {evenComponent} from './odd-even.component';
import {counterComponent} from './counter.component';
import {weatherComponent} from './weather.component';
import {RouteConfig,ROUTER_DIRECTIVES,RouterLink,RouterOutlet} from 'angular2/router';

@RouteConfig([
    //{path:'/',component: AppComponent,as:'Home'},
    {path:'/even',component: evenComponent,as:'Oddeven'},
    {path:'/counter',component: counterComponent,as:'Counter'},
    {path:'/weather',component: weatherComponent,as:'Weather'}
])

@Component({
    selector:'Main-app'
})

@View({
    templateUrl:'./app/views/main.html',
    directives:[ROUTER_DIRECTIVES,counterComponent, evenComponent]
})

export class AppComponent {
}