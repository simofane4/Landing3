import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment'; // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class SupportService {
  private apiUrl = environment.whmcsApiUrl; // WHMCS API URL from environment config

  constructor(private http: HttpClient) { }

  // Add announcement
  addAnnouncement(announcementData: any): Observable<any> {
    const body = this.buildRequest('AddAnnouncement', announcementData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Add cancel request
  addCancelRequest(requestData: any): Observable<any> {
    const body = this.buildRequest('AddCancelRequest', requestData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Add client note
  addClientNote(noteData: any): Observable<any> {
    const body = this.buildRequest('AddClientNote', noteData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Add ticket note
  addTicketNote(ticketNoteData: any): Observable<any> {
    const body = this.buildRequest('AddTicketNote', ticketNoteData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Add ticket reply
  addTicketReply(replyData: any): Observable<any> {
    const body = this.buildRequest('AddTicketReply', replyData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Block ticket sender
  blockTicketSender(senderData: any): Observable<any> {
    const body = this.buildRequest('BlockTicketSender', senderData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Delete announcement
  deleteAnnouncement(announcementId: string): Observable<any> {
    const body = this.buildRequest('DeleteAnnouncement', { announcementid: announcementId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Delete ticket
  deleteTicket(ticketId: string): Observable<any> {
    const body = this.buildRequest('DeleteTicket', { ticketid: ticketId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Delete ticket note
  deleteTicketNote(ticketNoteId: string): Observable<any> {
    const body = this.buildRequest('DeleteTicketNote', { ticketnoteid: ticketNoteId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Delete ticket reply
  deleteTicketReply(ticketReplyId: string): Observable<any> {
    const body = this.buildRequest('DeleteTicketReply', { ticketreplyid: ticketReplyId });
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Get announcements
  getAnnouncements(): Observable<any> {
    const body = this.buildRequest('GetAnnouncements', {});
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Merge ticket
  mergeTicket(mergeData: any): Observable<any> {
    const body = this.buildRequest('MergeTicket', mergeData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Open ticket
  openTicket(ticketData: any): Observable<any> {
    const body = this.buildRequest('OpenTicket', ticketData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Update ticket
  updateTicket(ticketData: any): Observable<any> {
    const body = this.buildRequest('UpdateTicket', ticketData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Update ticket reply
  updateTicketReply(replyData: any): Observable<any> {
    const body = this.buildRequest('UpdateTicketReply', replyData);
    return this.http.post(this.apiUrl, body.toString(), this.getHeaders());
  }

  // Helper method to build the API request body
  private buildRequest(action: string, params: any): URLSearchParams {
    const body = new URLSearchParams();
    body.set('action', action);
    body.set('username', environment.apiIdentifier); // WHMCS API username from environment
    body.set('password', environment.apiSecret); // WHMCS API password from environment
    body.set('responsetype', 'json');
    Object.keys(params).forEach(key => body.set(key, params[key]));
    return body;
  }

  // Helper method to set headers for requests
  private getHeaders() {
    return { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };
  }
}
