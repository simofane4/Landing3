import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = environment.whmcsApiUrl;

  constructor(private http: HttpClient) {}

  // Create OAuth Credential
  createOAuthCredential(credentialData: { clientName: string; redirectUri: string; scopes: string }): Observable<any> {
    const body = new URLSearchParams();
    body.set('action', 'CreateOAuthCredential');
    body.set('clientname', credentialData.clientName);
    body.set('redirecturi', credentialData.redirectUri);
    body.set('scopes', credentialData.scopes);
    body.set('responsetype', 'json');

    return this.http.post(this.apiUrl, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }

  // Delete OAuth Credential
  deleteOAuthCredential(credentialId: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('action', 'DeleteOAuthCredential');
    body.set('credentialid', credentialId);
    body.set('responsetype', 'json');

    return this.http.post(this.apiUrl, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }

  // List OAuth Credentials
  listOAuthCredentials(): Observable<any> {
    const body = new URLSearchParams();
    body.set('action', 'ListOAuthCredentials');
    body.set('responsetype', 'json');

    return this.http.post(this.apiUrl, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }

  // Update OAuth Credential
  updateOAuthCredential(credentialData: { credentialId: string; clientName: string; redirectUri: string; scopes: string }): Observable<any> {
    const body = new URLSearchParams();
    body.set('action', 'UpdateOAuthCredential');
    body.set('credentialid', credentialData.credentialId);
    body.set('clientname', credentialData.clientName);
    body.set('redirecturi', credentialData.redirectUri);
    body.set('scopes', credentialData.scopes);
    body.set('responsetype', 'json');

    return this.http.post(this.apiUrl, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }

  // Create SSO Token
  createSsoToken(clientId: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('action', 'CreateSsoToken');
    body.set('clientid', clientId);
    body.set('responsetype', 'json');

    return this.http.post(this.apiUrl, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }

  // Validate Login
  validateLogin(email: string, password2: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('action', 'ValidateLogin');
    body.set('username',environment.apiIdentifier);
    body.set('password',environment.apiSecret);
    body.set('accesskey',environment.accesskey);
    body.set('email', email);
    body.set('password2', password2); // Assuming password2 is used, as per WHMCS's API requirements
    body.set('responsetype', 'json');

    return this.http.post(this.apiUrl, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  }
}
