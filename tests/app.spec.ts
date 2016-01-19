/**
 * Created by agrimasthana on 1/19/16.
 */
import {
TestComponentBuilder,
describe,
expect,
inject,
it,
beforeEachProviders
} from 'angular2/testing';

import {Component, provide, DirectiveResolver} from 'angular2/core';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {RootRouter} from 'angular2/src/router/router';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {AppComponent} from '../app/app.component';
import {RouteRegistry} from "angular2/router";

 describe('App component',() =>{

     beforeEachProviders(() =>[
         AppComponent
     ]);

     it('should be present',inject([AppComponent],(app) =>{
         expect(app).toBeAnInstanceOf(AppComponent);
     }));
});