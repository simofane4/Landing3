import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { AddCancelRequestComponent } from './add-cancel-request/add-cancel-request.component';
import { AddClientNoteComponent } from './add-client-note/add-client-note.component';
import { AddTicketNoteComponent } from './add-ticket-note/add-ticket-note.component';
import { AddTicketReplyComponent } from './add-ticket-reply/add-ticket-reply.component';
import { BlockTicketSenderComponent } from './block-ticket-sender/block-ticket-sender.component';
import { DeleteAnnouncementComponent } from './delete-announcement/delete-announcement.component';
import { DeleteTicketComponent } from './delete-ticket/delete-ticket.component';
import { DeleteTicketNoteComponent } from './delete-ticket-note/delete-ticket-note.component';
import { DeleteTicketReplyComponent } from './delete-ticket-reply/delete-ticket-reply.component';
import { GetAnnouncementsComponent } from './get-announcements/get-announcements.component';
import { MergeTicketComponent } from './merge-ticket/merge-ticket.component';
import { OpenTicketComponent } from './open-ticket/open-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { UpdateTicketReplyComponent } from './update-ticket-reply/update-ticket-reply.component';

const routes: Routes = [
  { path: 'add-announcement', component: AddAnnouncementComponent },
  { path: 'add-cancel-request', component: AddCancelRequestComponent },
  { path: 'add-client-note', component: AddClientNoteComponent },
  { path: 'add-ticket-note', component: AddTicketNoteComponent },
  { path: 'add-ticket-reply', component: AddTicketReplyComponent },
  { path: 'block-ticket-sender', component: BlockTicketSenderComponent },
  { path: 'delete-announcement', component: DeleteAnnouncementComponent },
  { path: 'delete-ticket', component: DeleteTicketComponent },
  { path: 'delete-ticket-note', component: DeleteTicketNoteComponent },
  { path: 'delete-ticket-reply', component: DeleteTicketReplyComponent },
  { path: 'get-announcements', component: GetAnnouncementsComponent },
  { path: 'merge-ticket', component: MergeTicketComponent },
  { path: 'open-ticket', component: OpenTicketComponent },
  { path: 'update-ticket', component: UpdateTicketComponent },
  { path: 'update-ticket-reply', component: UpdateTicketReplyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupportRoutingModule { }
