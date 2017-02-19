import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { ContactResolve } from './contact.resolve';
import { ContactsService } from './contacts.service';
import { ContactsListComponent } from './contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail.component';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes)],
  declarations: [AppComponent, ContactsListComponent, ContactsDetailComponent],
  bootstrap: [AppComponent],
  providers: [
    ContactsService,
    ContactResolve
  ]
})
export class AppModule {}

/*
Copyright 2016 thoughtram GmbH. All Rights Reserved.
Use of this source code is governed by an TTML-style license that
can be found in the license.txt file at http://thoughtram.io/license.txt
*/