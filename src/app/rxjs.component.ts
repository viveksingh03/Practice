import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform, AfterViewChecked } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable, Subscription } from 'rxjs/Rx'
@Component({
    selector: 'selector',
    templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit, AfterViewChecked {

    constructor() {
    }

    ngAfterViewChecked() {
        this.CallRXJS();
    }

    CallRXJS() {

        // var button = document.querySelector('button');
        // Observable.fromEvent(button, 'click')
        //     .subscribe(() => console.log('Clicked!'));

        // var observable = Observable.create(function (observer) {
        //     observer.next(1);
        //     observer.next(2);
        //     observer.next(3);
        //     setTimeout(() => {
        //         observer.next(4);
        //         observer.complete();
        //     }, 1000);
        // });

        // Observable.interval(2000).take(5).do(() => {
        //     console.log("unsubscribe");

        //     observable.unsubscribe()
        // });

        // console.log('just before subscribe');
        // observable.subscribe({
        //     next: x => console.log('got value ' + x),
        //     error: err => console.error('something wrong occurred: ' + err),
        //     complete: () => console.log('done'),
        // });
        // console.log('just after subscribe');

        var obs = Observable.interval(20000).take(1)
            .do(i => console.log("obs value " + i));

        var sub1 = obs.subscribe(value => console.log("observer 1 received " + value));

        
        // Observable.interval(3000).take(1).do(() => { 
        //     sub1.unsubscribe();
        //     console.log("unsubscribed");
            
        // });
        
        // sub1.unsubscribe();

        // obs.subscribe(value => console.log("observer 2 received " + value));

    }

    ngOnInit() { }
}


// let myDate = "2017-01-23T14:09:19+0100";
// let returnDate = this.modifyDate(myDate)

// console.log(returnDate);
// private modifyDate(dateString: string): Date {
//     let d = new DatePipe("en-US");
//     let formattedDate = d.transform(new DateIEPipe().transform(dateString), 'shortDate');
//     let newFormattedDate: Date = new Date(formattedDate);
//     return newFormattedDate;
// }


// @Pipe({
//     name: 'dateIE'
// })
// export class DateIEPipe implements PipeTransform {

//     transform(input: String): any {

//         if (input.trim() == "") return input;
//         // Check if timezone present in the date string?
//         let splits = input.split("+");
//         let formattedTZ = "";
//         if (splits.length > 1) {
//             formattedTZ = splits[1].substr(0, 2).concat(":").concat(splits[1].substr(2));
//             return splits[0].concat("+").concat(formattedTZ);
//         } else {
//             return input;
//         }
//     }
// }