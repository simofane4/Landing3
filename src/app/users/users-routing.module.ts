import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { CreateClientInviteComponent } from './create-client-invite/create-client-invite.component';
import { DeleteUserClientComponent } from './delete-user-client/delete-user-client.component';
import { GetPermissionsListComponent } from './get-permissions-list/get-permissions-list.component';
import { GetUserPermissionsComponent } from './get-user-permissions/get-user-permissions.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateUserPermissionsComponent } from './update-user-permissions/update-user-permissions.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'create-client-invite', component: CreateClientInviteComponent },
  { path: 'delete-user-client', component: DeleteUserClientComponent },
  { path: 'get-permissions-list', component: GetPermissionsListComponent },
  { path: 'get-user-permissions', component: GetUserPermissionsComponent },
  { path: 'get-users', component: GetUsersComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'update-user', component: UpdateUserComponent },
  { path: 'update-user-permissions', component: UpdateUserPermissionsComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
