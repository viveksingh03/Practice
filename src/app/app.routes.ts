import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail.component';
import { ContactResolve } from './contact.resolve';

export const AppRoutes: Routes = [
  { path: '', component: ContactsListComponent },
  { 
    path: 'contact/:id',
    component: ContactsDetailComponent,
    resolve: {
      contact: ContactResolve
    }
  }
];


/*
Copyright 2016 thoughtram GmbH. All Rights Reserved.
Use of this source code is governed by an TTML-style license that
can be found in the license.txt file at http://thoughtram.io/license.txt
*/