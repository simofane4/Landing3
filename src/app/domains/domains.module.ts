import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainsRoutingModule } from './domains-routing.module';
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
/// end component
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CreateOrUpdateTldComponent, 
    DomainGetLockingStatusComponent,
    DomainGetNameserversComponent ,
     DomainGetWhoisInfoComponent,
    DomainRegisterComponent, 
    DomainReleaseComponent,
    DomainRenewComponent,
     DomainRequestEppComponent,
     DomainToggleIdProtectComponent , 
     DomainTransferComponent,
     DomainUpdateLockingStatusComponent, 
     DomainUpdateNameserversComponent,
     DomainUpdateWhoisInfoComponent,
     DomainWhoisComponent ,
     GetRegistrarsComponent,
     GetTldPricingComponent,
     UpdateClientDomainComponent 

  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    DomainsRoutingModule
  ]
})
export class DomainsModule { }
