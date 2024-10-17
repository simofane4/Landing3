import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { CreateOAuthCredentialComponent } from './create-o-auth-credential/create-o-auth-credential.component';
import { CreateSsoTokenComponent } from './create-sso-token/create-sso-token.component';
import { DeleteOAuthCredentialComponent } from './delete-o-auth-credential/delete-o-auth-credential.component';
import { ListOAuthCredentialsComponent } from './list-o-auth-credentials/list-o-auth-credentials.component';
import { UpdateOAuthCredentialComponent } from './update-o-auth-credential/update-o-auth-credential.component';
import { ValidateLoginComponent } from './validate-login/validate-login.component';

@NgModule({
  declarations: [
    CreateOAuthCredentialComponent,
    CreateSsoTokenComponent,
    DeleteOAuthCredentialComponent,
    ListOAuthCredentialsComponent,
    UpdateOAuthCredentialComponent,
    ValidateLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule {}
