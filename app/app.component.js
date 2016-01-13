System.register(['angular2/core', './odd-even.component', './counter.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, odd_even_component_1, counter_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (odd_even_component_1_1) {
                odd_even_component_1 = odd_even_component_1_1;
            },
            function (counter_component_1_1) {
                counter_component_1 = counter_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'Main-app',
                        styles: ['.styled{' +
                                'color:red;' +
                                'text-decoration:underline;' +
                                '}'],
                        template: '<h2> "Counter APP"</h2><br>Here is the counter component<br>' +
                            '<counter></counter><br> Here is the odd or even component<br><odd-even></odd-even>',
                        directives: [odd_even_component_1.evenComponent, counter_component_1.counterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map