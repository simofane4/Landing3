import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service'; // Service for handling user-related operations

// Components
import { AddUserComponent } from './add-user/add-user.component';
import { CreateClientInviteComponent } from './create-client-invite/create-client-invite.component';
import { DeleteUserClientComponent } from './delete-user-client/delete-user-client.component';
import { GetPermissionsListComponent } from './get-permissions-list/get-permissions-list.component';
import { GetUserPermissionsComponent } from './get-user-permissions/get-user-permissions.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateUserPermissionsComponent } from './update-user-permissions/update-user-permissions.component';

@NgModule({
  declarations: [
    AddUserComponent,
    CreateClientInviteComponent,
    DeleteUserClientComponent,
    GetPermissionsListComponent,
    GetUserPermissionsComponent,
    GetUsersComponent,
    ResetPasswordComponent,
    UpdateUserComponent,
    UpdateUserPermissionsComponent
  ],
  imports: [
    CommonModule,            // Provides common Angular directives (ngIf, ngFor, etc.)
    FormsModule,             // Supports template-driven forms
    ReactiveFormsModule,     // Supports reactive forms
    HttpClientModule,         // Supports HTTP client functionality
    UsersRoutingModule        // Import the Users routing module
  ],
  providers: [
    UsersService // Register the Users service
  ]
})
export class UsersModule { }
