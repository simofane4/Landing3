import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: 'accept-quote', component: AcceptQuoteComponent },
  { path: 'add-billable-item', component: AddBillableItemComponent },
  { path: 'add-credit', component: AddCreditComponent },
  { path: 'add-invoice-payment', component: AddInvoicePaymentComponent },
  { path: 'add-pay-method', component: AddPayMethodComponent },
  { path: 'add-transaction', component: AddTransactionComponent },
  { path: 'apply-credit', component: ApplyCreditComponent },
  { path: 'capture-payment', component: CapturePaymentComponent },
  { path: 'create-invoice', component: CreateInvoiceComponent },
  { path: 'create-quote', component: CreateQuoteComponent },
  { path: 'delete-pay-method', component: DeletePayMethodComponent },
  { path: 'delete-quote', component: DeleteQuoteComponent },
  { path: 'gen-invoices', component: GenInvoicesComponent },
  { path: 'get-credits', component: GetCreditsComponent },
  { path: 'get-invoice', component: GetInvoiceComponent },
  { path: 'get-invoices', component: GetInvoicesComponent },
  { path: 'get-pay-methods', component: GetPayMethodsComponent },
  { path: 'get-quotes', component: GetQuotesComponent },
  { path: 'get-transactions', component: GetTransactionsComponent },
  { path: 'send-quote', component: SendQuoteComponent },
  { path: 'update-invoice', component: UpdateInvoiceComponent },
  { path: 'update-pay-method', component: UpdatePayMethodComponent },
  { path: 'update-quote', component: UpdateQuoteComponent },
  { path: 'update-transaction', component: UpdateTransactionComponent },
   // Default route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule {}
