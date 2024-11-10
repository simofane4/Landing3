import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment'; // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.whmcsApiUrl; // URL of the WHMCS API

  constructor(private http: HttpClient) {}

  // Helper to build request body
  private buildRequest(action: string, params: any): URLSearchParams {
    const body = new URLSearchParams();
    body.set('action', action);
    body.set('username', environment.apiIdentifier);
    body.set('password', environment.apiSecret);
    body.set('responsetype', 'json');
    Object.keys(params).forEach((key) => body.set(key, params[key]));
    console.log(body)
    return body;
  }

  // Helper to get headers
  private getHeaders() {
    return { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
  }

  // Add a new user
  addUser(userData: any): Observable<any> {
    const body = this.buildRequest('AddUser', userData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get a list of users
  getUsers(): Observable<any> {
    const body = this.buildRequest('GetUsers', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Delete a user client
  deleteUserClient(userId: string): Observable<any> {
    const body = this.buildRequest('DeleteUserClient', { userId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Reset user password
  // Reset password for a specific user
  resetPassword(userId: string, newPassword: string): Observable<any> {
    const body = this.buildRequest('ResetPassword', { userId, newPassword });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get user permissions
  getUserPermissions(userId: string): Observable<any> {
    const body = this.buildRequest('GetUserPermissions', { userId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Update user permissions
  updateUserPermissions(userId: string, permissions: any): Observable<any> {
    const body = this.buildRequest('UpdateUserPermissions', { userId, permissions: JSON.stringify(permissions) });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get permissions list
  getPermissionsList(): Observable<any> {
    const body = this.buildRequest('GetPermissionsList', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Create a client invite
  createClientInvite(inviteData: any): Observable<any> {
    const body = this.buildRequest('CreateClientInvite', inviteData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Update user information
  updateUser(userId: string, userData: any): Observable<any> {
    const body = this.buildRequest('UpdateUser', { userId, ...userData });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }
}
