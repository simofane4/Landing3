import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-summary',
  templateUrl: './routing-summary.component.html',
  styleUrls: ['./routing-summary.component.scss']
})
export class RoutingSummaryComponent implements OnInit {

  modulesRoutes = [
    {
      module: 'Support',
      routes: [
        { path: 'add-announcement', description: 'Add Announcement' },
        { path: 'add-cancel-request', description: 'Add Cancel Request' },
        { path: 'add-client-note', description: 'Add Client Note' },
        { path: 'add-ticket-note', description: 'Add Ticket Note' },
        { path: 'add-ticket-reply', description: 'Add Ticket Reply' },
        { path: 'block-ticket-sender', description: 'Block Ticket Sender' },
        { path: 'delete-announcement', description: 'Delete Announcement' },
        { path: 'delete-ticket', description: 'Delete Ticket' },
        { path: 'delete-ticket-note', description: 'Delete Ticket Note' },
        { path: 'delete-ticket-reply', description: 'Delete Ticket Reply' },
        { path: 'get-announcements', description: 'Get Announcements' },
        { path: 'merge-ticket', description: 'Merge Ticket' },
        { path: 'open-ticket', description: 'Open Ticket' },
        { path: 'update-ticket', description: 'Update Ticket' },
        { path: 'update-ticket-reply', description: 'Update Ticket Reply' }
      ]
    }
    ,
    {
      module: 'Authentication',
      routes: [
        { path: 'create-o-auth-credential', description: 'Create OAuth Credential' },
        { path: 'create-sso-token', description: 'Create SSO Token' },
        { path: 'delete-o-auth-credential', description: 'Delete OAuth Credential' },
        { path: 'list-o-auth-credentials', description: 'List OAuth Credentials' },
        { path: 'update-o-auth-credential', description: 'Update OAuth Credential' },
        { path: 'validate-login', description: 'Validate Login' }
      ]
    },
    {
      module: 'Users',
      routes: [
        { path: 'add-user', description: 'Add User' },
        { path: 'create-client-invite', description: 'Create Client Invite' },
        { path: 'delete-user-client', description: 'Delete User Client' },
        { path: 'get-permissions-list', description: 'Get Permissions List' },
        { path: 'get-user-permissions', description: 'Get User Permissions' },
        { path: 'get-users', description: 'Get Users' },
        { path: 'reset-password', description: 'Reset Password' },
        { path: 'update-user', description: 'Update User' },
        { path: 'update-user-permissions', description: 'Update User Permissions' }
      ]
    },
    {
      module: 'Orders',
      routes: [
        { path: 'accept', description: 'Accept Order' },
        { path: 'add', description: 'Add Order' },
        { path: 'cancel', description: 'Cancel Order' },
        { path: 'delete', description: 'Delete Order' },
        { path: 'fraud', description: 'Mark Order as Fraud' },
        { path: 'list', description: 'Get Orders' },
        { path: 'statuses', description: 'Get Order Statuses' },
        { path: 'products', description: 'Get Products' },
        { path: 'promotions', description: 'Get Promotions' },
        { path: 'fraud-check', description: 'Order Fraud Check' },
        { path: 'pending', description: 'Get Pending Orders' }
      ]
    }
    ,
    {
      module: 'Billing',
      routes: [
        { path: 'accept-quote', description: 'Accept Quote' },
        { path: 'add-billable-item', description: 'Add Billable Item' },
        { path: 'add-credit', description: 'Add Credit' },
        { path: 'add-invoice-payment', description: 'Add Invoice Payment' },
        { path: 'add-pay-method', description: 'Add Pay Method' },
        { path: 'add-transaction', description: 'Add Transaction' },
        { path: 'apply-credit', description: 'Apply Credit' },
        { path: 'capture-payment', description: 'Capture Payment' },
        { path: 'create-invoice', description: 'Create Invoice' },
        { path: 'create-quote', description: 'Create Quote' },
        { path: 'delete-pay-method', description: 'Delete Pay Method' },
        { path: 'delete-quote', description: 'Delete Quote' },
        { path: 'gen-invoices', description: 'Generate Invoices' },
        { path: 'get-credits', description: 'Get Credits' },
        { path: 'get-invoice', description: 'Get Invoice' },
        { path: 'get-invoices', description: 'Get Invoices' },
        { path: 'get-pay-methods', description: 'Get Pay Methods' },
        { path: 'get-quotes', description: 'Get Quotes' },
        { path: 'get-transactions', description: 'Get Transactions' },
        { path: 'send-quote', description: 'Send Quote' },
        { path: 'update-invoice', description: 'Update Invoice' },
        { path: 'update-pay-method', description: 'Update Pay Method' },
        { path: 'update-quote', description: 'Update Quote' },
        { path: 'update-transaction', description: 'Update Transaction' }
      ]
    }
    ,
    {
      module: 'Client',
      routes: [
        { path: 'add-client', description: 'Add Client' },
        { path: 'add-contact', description: 'Add Contact' },
        { path: 'close-client', description: 'Close Client' },
        { path: 'delete-client', description: 'Delete Client' },
        { path: 'delete-contact', description: 'Delete Contact' },
        { path: 'get-cancelled-packages', description: 'Get Cancelled Packages' },
        { path: 'get-client-groups', description: 'Get Client Groups' },
        { path: 'get-client-password', description: 'Get Client Password' },
        { path: 'get-clients', description: 'Get Clients' },
        { path: 'get-clients-addons', description: 'Get Clients Addons' },
        { path: 'get-clients-details', description: 'Get Clients Details' },
        { path: 'get-clients-domains', description: 'Get Clients Domains' },
        { path: 'get-clients-products', description: 'Get Clients Products' },
        { path: 'get-contacts', description: 'Get Contacts' },
        { path: 'get-emails', description: 'Get Emails' },
        { path: 'update-client', description: 'Update Client' },
        { path: 'update-contact', description: 'Update Contact' }
      ]
    }
    ,
    {
      module: 'Domains',
      routes: [
        { path: 'create-or-update-tld', description: 'Create or Update TLD' },
        { path: 'domain-get-locking-status', description: 'Get Domain Locking Status' },
        { path: 'domain-get-nameservers', description: 'Get Domain Nameservers' },
        { path: 'domain-get-whois-info', description: 'Get Domain WHOIS Info' },
        { path: 'domain-register', description: 'Register Domain' },
        { path: 'domain-release', description: 'Release Domain' },
        { path: 'domain-renew', description: 'Renew Domain' },
        { path: 'domain-request-epp', description: 'Request Domain EPP Code' },
        { path: 'domain-toggle-id-protect', description: 'Toggle Domain ID Protection' },
        { path: 'domain-transfer', description: 'Transfer Domain' },
        { path: 'domain-update-locking-status', description: 'Update Domain Locking Status' },
        { path: 'domain-update-nameservers', description: 'Update Domain Nameservers' },
        { path: 'domain-update-whois-info', description: 'Update Domain WHOIS Info' },
        { path: 'domain-whois', description: 'Domain WHOIS Lookup' },
        { path: 'get-registrars', description: 'Get Domain Registrars' },
        { path: 'get-tld-pricing', description: 'Get TLD Pricing' },
        { path: 'update-client-domain', description: 'Update Client Domain' }
      ]
    }
    
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
