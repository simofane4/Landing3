import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing all components
import { CreateOrUpdateTldComponent } from './create-or-update-tld/create-or-update-tld.component';
import { DomainGetLockingStatusComponent } from './domain-get-locking-status/domain-get-locking-status.component';
import { DomainGetNameserversComponent } from './domain-get-nameservers/domain-get-nameservers.component';
import { DomainGetWhoisInfoComponent } from './domain-get-whois-info/domain-get-whois-info.component';
import { DomainRegisterComponent } from './domain-register/domain-register.component';
import { DomainReleaseComponent } from './domain-release/domain-release.component';
import { DomainRenewComponent } from './domain-renew/domain-renew.component';
import { DomainRequestEppComponent } from './domain-request-epp/domain-request-epp.component';
import { DomainToggleIdProtectComponent } from './domain-toggle-id-protect/domain-toggle-id-protect.component';
import { DomainTransferComponent } from './domain-transfer/domain-transfer.component';
import { DomainUpdateLockingStatusComponent } from './domain-update-locking-status/domain-update-locking-status.component';
import { DomainUpdateNameserversComponent } from './domain-update-nameservers/domain-update-nameservers.component';
import { DomainUpdateWhoisInfoComponent } from './domain-update-whois-info/domain-update-whois-info.component';
import { DomainWhoisComponent } from './domain-whois/domain-whois.component';
import { GetRegistrarsComponent } from './get-registrars/get-registrars.component';
import { GetTldPricingComponent } from './get-tld-pricing/get-tld-pricing.component';
import { UpdateClientDomainComponent } from './update-client-domain/update-client-domain.component';

// Defining routes for each component
const routes: Routes = [
  { path: 'create-or-update-tld', component: CreateOrUpdateTldComponent },
  { path: 'domain-get-locking-status', component: DomainGetLockingStatusComponent },
  { path: 'domain-get-nameservers', component: DomainGetNameserversComponent },
  { path: 'domain-get-whois-info', component: DomainGetWhoisInfoComponent },
  { path: 'domain-register', component: DomainRegisterComponent },
  { path: 'domain-release', component: DomainReleaseComponent },
  { path: 'domain-renew', component: DomainRenewComponent },
  { path: 'domain-request-epp', component: DomainRequestEppComponent },
  { path: 'domain-toggle-id-protect', component: DomainToggleIdProtectComponent },
  { path: 'domain-transfer', component: DomainTransferComponent },
  { path: 'domain-update-locking-status', component: DomainUpdateLockingStatusComponent },
  { path: 'domain-update-nameservers', component: DomainUpdateNameserversComponent },
  { path: 'domain-update-whois-info', component: DomainUpdateWhoisInfoComponent },
  { path: 'domain-whois', component: DomainWhoisComponent },
  { path: 'get-registrars', component: GetRegistrarsComponent },
  { path: 'get-tld-pricing', component: GetTldPricingComponent },
  { path: 'update-client-domain', component: UpdateClientDomainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainsRoutingModule { }
