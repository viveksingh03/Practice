import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'contacts-list',
  template: `
    <ul>
      <li *ngFor="let contact of contacts | async">
        <a [routerLink]="['contact', contact.id]">{{contact.name}}</a>
      </li>
    </ul>
  `
})
export class ContactsListComponent implements OnInit {
  
  contacts: any[];
  
  constructor(private contactsService: ContactsService) {}
  
  ngOnInit() {
    this.contacts = this.contactsService.getContacts()
  }
}


/*
Copyright 2016 thoughtram GmbH. All Rights Reserved.
Use of this source code is governed by an TTML-style license that
can be found in the license.txt file at http://thoughtram.io/license.txt
*/