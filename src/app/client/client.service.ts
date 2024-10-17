import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment'; // Ensure your environment file is correctly set up

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = environment.whmcsApiUrl; // API URL from environment settings

  constructor(private http: HttpClient) {}

  // Add a new client
  addClient(clientData: any): Observable<any> {
    const body = this.buildRequest('AddClient', clientData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Add a new contact
  addContact(contactData: any): Observable<any> {
    const body = this.buildRequest('AddContact', contactData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Close a client
  closeClient(clientId: string): Observable<any> {
    const body = this.buildRequest('CloseClient', { clientid: clientId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Delete a client
  deleteClient(clientId: string): Observable<any> {
    const body = this.buildRequest('DeleteClient', { clientid: clientId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Delete a contact
  deleteContact(contactId: string): Observable<any> {
    const body = this.buildRequest('DeleteContact', { contactid: contactId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get cancelled packages
  getCancelledPackages(): Observable<any> {
    const body = this.buildRequest('GetCancelledPackages', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get client groups
  getClientGroups(): Observable<any> {
    const body = this.buildRequest('GetClientGroups', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get client password
  getClientPassword(clientId: string): Observable<any> {
    const body = this.buildRequest('GetClientPassword', { clientid: clientId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get all clients
  getClients(): Observable<any> {
    const body = this.buildRequest('GetClients', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get client addons
  getClientsAddons(clientId: string): Observable<any> {
    const body = this.buildRequest('GetClientsAddons', { clientid: clientId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get client details
  getClientsDetails(clientId: string): Observable<any> {
    const body = this.buildRequest('GetClientsDetails', { clientid: clientId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get client domains
  getClientsDomains(clientId: string): Observable<any> {
    const body = this.buildRequest('GetClientsDomains', { clientid: clientId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get client products
  getClientsProducts(clientId: string): Observable<any> {
    const body = this.buildRequest('GetClientsProducts', { clientid: clientId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get contacts for a client
  getContacts(clientId: string): Observable<any> {
    const body = this.buildRequest('GetContacts', { clientid: clientId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get client emails
  getEmails(clientId: string): Observable<any> {
    const body = this.buildRequest('GetEmails', { clientid: clientId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Update client details
  updateClient(clientData: any): Observable<any> {
    const body = this.buildRequest('UpdateClient', clientData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Update contact details
  updateContact(contactData: any): Observable<any> {
    const body = this.buildRequest('UpdateContact', contactData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Helper method to build request body
  private buildRequest(action: string, params: any): URLSearchParams {
    const body = new URLSearchParams();
    body.set('action', action);
    body.set('username', environment.apiIdentifier); // Replace with actual API identifier
    body.set('password', environment.apiSecret); // Replace with actual API secret
    body.set('responsetype', 'json');
    Object.keys(params).forEach((key) => body.set(key, params[key]));
    return body;
  }

  // Helper method to get headers
  private getHeaders() {
    return { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
  }
}
