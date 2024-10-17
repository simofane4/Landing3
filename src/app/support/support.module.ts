import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Import all components
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

// Import routing module
import { SupportRoutingModule } from './support-routing.module';

@NgModule({
  declarations: [
    // Declare all components
    AddAnnouncementComponent,
    AddCancelRequestComponent,
    AddClientNoteComponent,
    AddTicketNoteComponent,
    AddTicketReplyComponent,
    BlockTicketSenderComponent,
    DeleteAnnouncementComponent,
    DeleteTicketComponent,
    DeleteTicketNoteComponent,
    DeleteTicketReplyComponent,
    GetAnnouncementsComponent,
    MergeTicketComponent,
    OpenTicketComponent,
    UpdateTicketComponent,
    UpdateTicketReplyComponent,
  ],
  imports: [
    CommonModule,
    SupportRoutingModule, // Import the routing module
    ReactiveFormsModule,  // For form handling
    FormsModule // If you have template-driven forms
  ],
  providers: []
})
export class SupportModule { }
