import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Adjust path if necessary

@Injectable({
  providedIn: 'root'
})
export class DomainsService {
  private apiUrl = environment.whmcsApiUrl; // WHMCS API URL from environment config

  constructor(private http: HttpClient) {} // Inject HttpClient
 
    // Add a new TLD
  addTld(tldData: any): Observable<any> {
    const body = this.buildRequest('AddTld', tldData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }
  
  // Update an existing TLD
  updateTld(tldData: any): Observable<any> {
    const body = this.buildRequest('UpdateTld', tldData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }


  // Get the locking status of a domain
  getDomainLockingStatus(domainName: string): Observable<any> {
    const body = this.buildRequest('DomainGetLockingStatus', { domain: domainName });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Register a new domain
  registerDomain(domainData: any): Observable<any> {
    const body = this.buildRequest('DomainRegister', domainData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }
  // Release a domain to a new tag
  releaseDomain(domainName: string, newTag: string): Observable<any> {
    const body = this.buildRequest('DomainRelease', { domain: domainName, newtag: newTag });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }
  // Transfer a domain
  transferDomain(domainData: any): Observable<any> {
    const body = this.buildRequest('DomainTransfer', domainData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Renew a domain
  renewDomain(domainData: any): Observable<any> {
    const body = this.buildRequest('DomainRenew', domainData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get domain WHOIS information
  getWhoisInfo(domainName: string): Observable<any> {
    const body = this.buildRequest('DomainWhois', { domain: domainName });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get domain nameservers
  getNameservers(domainName: string): Observable<any> {
    const body = this.buildRequest('DomainGetNameservers', { domain: domainName });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }
  // Update the locking status of a domain
  updateLockingStatus(domainName: string, lock: boolean): Observable<any> {
    const body = this.buildRequest('DomainUpdateLockingStatus', { 
      domain: domainName, 
      lockstatus: lock ? '1' : '0' 
    });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Update domain nameservers
  updateNameservers(domainName: string, nameservers: any): Observable<any> {
    const body = this.buildRequest('DomainUpdateNameservers', { 
      domain: domainName, 
      ...nameservers 
    });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Toggle ID protection
  toggleIdProtect(domainName: string, protect: boolean): Observable<any> {
    const body = this.buildRequest('DomainToggleIdProtect', { 
      domain: domainName, 
      idprotection: protect ? '1' : '0' 
    });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Request EPP code
  requestEppCode(domainName: string): Observable<any> {
    const body = this.buildRequest('DomainRequestEPP', { domain: domainName });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Update domain WHOIS information
  updateWhoisInfo(domainData: any): Observable<any> {
    const body = this.buildRequest('DomainUpdateWhoisInfo', domainData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get TLD pricing
  getTldPricing(): Observable<any> {
    const body = this.buildRequest('GetTLDPricing', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get all registrars
  getRegistrars(): Observable<any> {
    const body = this.buildRequest('GetRegistrars', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }
  // Update the client-related details of a domain
  updateClientDomain(domainData: any): Observable<any> {
    const body = this.buildRequest('UpdateClientDomain', domainData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Helper to build the request body
  private buildRequest(action: string, params: any): URLSearchParams {
    const body = new URLSearchParams();
    body.set('action', action);
    body.set('username', environment.apiIdentifier);
    body.set('password', environment.apiSecret);
    body.set('responsetype', 'json');
    Object.keys(params).forEach((key) => body.set(key, params[key]));
    return body;
  }

  // Helper to get HTTP headers
  private getHeaders() {
    return { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
  }
}
