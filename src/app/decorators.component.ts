import { Component, OnInit } from '@angular/core';
// import { readonly } from 'core-decorators';

@Component({
    selector: 'decorators',
    templateUrl: './decorators.component.html'
})

export class DecoratorComponent implements OnInit {
    constructor() {
        var dinner = new Meal();
        //dinner.entree = 'salmon';
        console.log(dinner);

        

        Object.defineProperty(cat.prototype, "meow", { writable: true }); // turn it to false for readonly.
        var garfield = new cat();

        

        // The decorator has the same signature as `Object.defineProperty`, 
        // and has an opportunity to intercede before the relevant 
        // `defineProperty ` actually occurs
        // descriptor = readonly(cat.prototype, 'meow', descriptor) || descriptor;
        // Object.defineProperty(cat.prototype, 'meow', descriptor);

        garfield.meow = function () {
            console.log("log");
            return "log";
        }

            
    }



    ngOnInit() { }
}

class cat {
    @readonly
    meow() {
        return "the call function";
    }

}

function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

// export function Override(label: string) {
//     return function (target: any, key: string) {
//         Object.defineProperty(target, key, { configurable: false, get: () => label, set: () => { } });
//     }
// }
function ReadOnly(target: any, key: string) {
    Object.defineProperty(target, key, { writable: false });


}


class Meal {
    @ReadOnly
    entree;
}