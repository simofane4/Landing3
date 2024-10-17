import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Route
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';

// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HttpClient, provideHttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RoutingSummaryComponent } from './routing-summary/routing-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    RoutingSummaryComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
