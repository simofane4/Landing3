import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillingRoutingModule } from './billing-routing.module';

// Import all components
import { AcceptQuoteComponent } from './accept-quote/accept-quote.component';
import { AddBillableItemComponent } from './add-billable-item/add-billable-item.component';
import { AddCreditComponent } from './add-credit/add-credit.component';
import { AddInvoicePaymentComponent } from './add-invoice-payment/add-invoice-payment.component';
import { AddPayMethodComponent } from './add-pay-method/add-pay-method.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { ApplyCreditComponent } from './apply-credit/apply-credit.component';
import { CapturePaymentComponent } from './capture-payment/capture-payment.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { DeletePayMethodComponent } from './delete-pay-method/delete-pay-method.component';
import { DeleteQuoteComponent } from './delete-quote/delete-quote.component';
import { GenInvoicesComponent } from './gen-invoices/gen-invoices.component';
import { GetCreditsComponent } from './get-credits/get-credits.component';
import { GetInvoiceComponent } from './get-invoice/get-invoice.component';
import { GetInvoicesComponent } from './get-invoices/get-invoices.component';
import { GetPayMethodsComponent } from './get-pay-methods/get-pay-methods.component';
import { GetQuotesComponent } from './get-quotes/get-quotes.component';
import { GetTransactionsComponent } from './get-transactions/get-transactions.component';
import { SendQuoteComponent } from './send-quote/send-quote.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { UpdatePayMethodComponent } from './update-pay-method/update-pay-method.component';
import { UpdateQuoteComponent } from './update-quote/update-quote.component';
import { UpdateTransactionComponent } from './update-transaction/update-transaction.component';

@NgModule({
  declarations: [
    AcceptQuoteComponent,
    AddBillableItemComponent,
    AddCreditComponent,
    AddInvoicePaymentComponent,
    AddPayMethodComponent,
    AddTransactionComponent,
    ApplyCreditComponent,
    CapturePaymentComponent,
    CreateInvoiceComponent,
    CreateQuoteComponent,
    DeletePayMethodComponent,
    DeleteQuoteComponent,
    GenInvoicesComponent,
    GetCreditsComponent,
    GetInvoiceComponent,
    GetInvoicesComponent,
    GetPayMethodsComponent,
    GetQuotesComponent,
    GetTransactionsComponent,
    SendQuoteComponent,
    UpdateInvoiceComponent,
    UpdatePayMethodComponent,
    UpdateQuoteComponent,
    UpdateTransactionComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [] // Add any services if needed
})
export class BillingModule {}
