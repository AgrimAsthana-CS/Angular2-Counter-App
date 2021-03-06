/**
 * Created by agrimasthana on 1/12/16.
 */
import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {provide} from 'angular2/core';
import {LocationStrategy,HashLocationStrategy,ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";


bootstrap(AppComponent ,[HTTP_PROVIDERS,ROUTER_PROVIDERS,provide(LocationStrategy,{useClass: HashLocationStrategy})]);
