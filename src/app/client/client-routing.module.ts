import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: 'add-client', component: AddClientComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'close-client', component: CloseClientComponent },
  { path: 'delete-client', component: DeleteClientComponent },
  { path: 'delete-contact', component: DeleteContactComponent },
  { path: 'get-cancelled-packages', component: GetCancelledPackagesComponent },
  { path: 'get-client-groups', component: GetClientGroupsComponent },
  { path: 'get-client-password', component: GetClientPasswordComponent },
  { path: 'get-clients', component: GetClientsComponent },
  { path: 'get-clients-addons', component: GetClientsAddonsComponent },
  { path: 'get-clients-details', component: GetClientsDetailsComponent },
  { path: 'get-clients-domains', component: GetClientsDomainsComponent },
  { path: 'get-clients-products', component: GetClientsProductsComponent },
  { path: 'get-contacts', component: GetContactsComponent },
  { path: 'get-emails', component: GetEmailsComponent },
  { path: 'update-client', component: UpdateClientComponent },
  { path: 'update-contact', component: UpdateContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
