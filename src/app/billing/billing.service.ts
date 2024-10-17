import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private apiUrl = environment.whmcsApiUrl; // Base API URL

  constructor(private http: HttpClient) {}

  // Helper method to build the request body
  private buildRequest(action: string, params: any): URLSearchParams {
    const body = new URLSearchParams();
    body.set('action', action);
    body.set('username', environment.apiIdentifier);
    body.set('password', environment.apiSecret);
    body.set('responsetype', 'json');
    Object.keys(params).forEach(key => body.set(key, params[key]));
    return body;
  }

  // Helper method to set headers
  private getHeaders() {
    return { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
  }

  // 1. Accept a quote
  acceptQuote(quoteId: string): Observable<any> {
    const body = this.buildRequest('AcceptQuote', { quoteid: quoteId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 2. Add a billable item
  addBillableItem(data: any): Observable<any> {
    const body = this.buildRequest('AddBillableItem', data);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 3. Add credit to a client
  addCredit(data: any): Observable<any> {
    const body = this.buildRequest('AddCredit', data);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 4. Add an invoice payment
  addInvoicePayment(data: any): Observable<any> {
    const body = this.buildRequest('AddInvoicePayment', data);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 5. Add a pay method
  addPayMethod(data: any): Observable<any> {
    const body = this.buildRequest('AddPayMethod', data);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 6. Add a transaction
  addTransaction(data: any): Observable<any> {
    const body = this.buildRequest('AddTransaction', data);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 7. Apply credit to an invoice
  applyCredit(data: any): Observable<any> {
    const body = this.buildRequest('ApplyCredit', data);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 8. Capture a payment
  capturePayment(invoiceId: string): Observable<any> {
    const body = this.buildRequest('CapturePayment', { invoiceid: invoiceId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 9. Create an invoice
  createInvoice(data: any): Observable<any> {
    const body = this.buildRequest('CreateInvoice', data);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 10. Create a quote
  createQuote(data: any): Observable<any> {
    const body = this.buildRequest('CreateQuote', data);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 11. Delete a pay method
  deletePayMethod(payMethodId: string): Observable<any> {
    const body = this.buildRequest('DeletePayMethod', { id: payMethodId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 12. Delete a quote
  deleteQuote(quoteId: string): Observable<any> {
    const body = this.buildRequest('DeleteQuote', { quoteid: quoteId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 13. Generate invoices
  genInvoices(): Observable<any> {
    const body = this.buildRequest('GenInvoices', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 14. Get credits for a client
  getCredits(clientId: string): Observable<any> {
    const body = this.buildRequest('GetCredits', { clientid: clientId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 15. Get a specific invoice
  getInvoice(invoiceId: string): Observable<any> {
    const body = this.buildRequest('GetInvoice', { invoiceid: invoiceId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 16. Get all invoices
  getInvoices(): Observable<any> {
    const body = this.buildRequest('GetInvoices', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 17. Get pay methods for a client
  getPayMethods(clientId: string): Observable<any> {
    const body = this.buildRequest('GetPayMethods', { clientid: clientId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 18. Get quotes
  getQuotes(): Observable<any> {
    const body = this.buildRequest('GetQuotes', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 19. Get transactions
  getTransactions(): Observable<any> {
    const body = this.buildRequest('GetTransactions', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 20. Send a quote
  sendQuote(quoteId: string,email: string ): Observable<any> {
    const body = this.buildRequest('SendQuote', { quoteid: quoteId,email:email });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 21. Update an invoice
  updateInvoice(data: any): Observable<any> {
    const body = this.buildRequest('UpdateInvoice', data);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 22. Update a pay method
  updatePayMethod(data: any): Observable<any> {
    const body = this.buildRequest('UpdatePayMethod', data);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 23. Update a quote
  updateQuote(data: any): Observable<any> {
    const body = this.buildRequest('UpdateQuote', data);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // 24. Update a transaction
  updateTransaction(data: any): Observable<any> {
    const body = this.buildRequest('UpdateTransaction', data);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }
}
