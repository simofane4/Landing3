import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOAuthCredentialComponent } from './create-o-auth-credential/create-o-auth-credential.component';
import { CreateSsoTokenComponent } from './create-sso-token/create-sso-token.component';
import { DeleteOAuthCredentialComponent } from './delete-o-auth-credential/delete-o-auth-credential.component';
import { ListOAuthCredentialsComponent } from './list-o-auth-credentials/list-o-auth-credentials.component';
import { UpdateOAuthCredentialComponent } from './update-o-auth-credential/update-o-auth-credential.component';
import { ValidateLoginComponent } from './validate-login/validate-login.component';

const routes: Routes = [
  { path: 'create-o-auth-credential', component: CreateOAuthCredentialComponent },
  { path: 'create-sso-token', component: CreateSsoTokenComponent },
  { path: 'delete-o-auth-credential', component: DeleteOAuthCredentialComponent },
  { path: 'list-o-auth-credentials', component: ListOAuthCredentialsComponent },
  { path: 'update-o-auth-credential', component: UpdateOAuthCredentialComponent },
  { path: 'validate-login', component: ValidateLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
