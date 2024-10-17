import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientRoutingModule } from './client-routing.module';

import { AddClientComponent } from './add-client/add-client.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { CloseClientComponent } from './close-client/close-client.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { GetCancelledPackagesComponent } from './get-cancelled-packages/get-cancelled-packages.component';
import { GetClientGroupsComponent } from './get-client-groups/get-client-groups.component';
import { GetClientPasswordComponent } from './get-client-password/get-client-password.component';
import { GetClientsComponent } from './get-clients/get-clients.component';
import { GetClientsAddonsComponent } from './get-clients-addons/get-clients-addons.component';
import { GetClientsDetailsComponent } from './get-clients-details/get-clients-details.component';
import { GetClientsDomainsComponent } from './get-clients-domains/get-clients-domains.component';
import { GetClientsProductsComponent } from './get-clients-products/get-clients-products.component';
import { GetContactsComponent } from './get-contacts/get-contacts.component';
import { GetEmailsComponent } from './get-emails/get-emails.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

@NgModule({
  declarations: [
    AddClientComponent,
    AddContactComponent,
    CloseClientComponent,
    DeleteClientComponent,
    DeleteContactComponent,
    GetCancelledPackagesComponent,
    GetClientGroupsComponent,
    GetClientPasswordComponent,
    GetClientsComponent,
    GetClientsAddonsComponent,
    GetClientsDetailsComponent,
    GetClientsDomainsComponent,
    GetClientsProductsComponent,
    GetContactsComponent,
    GetEmailsComponent,
    UpdateClientComponent,
    UpdateContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientRoutingModule
  ]
})
export class ClientModule {}
