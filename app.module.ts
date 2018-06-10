import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { HomeComponent } from './home/home.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { PaymentcomponentComponent } from './paymentcomponent/paymentcomponent.component';
import { RecipientcomponentComponent } from './recipientcomponent/recipientcomponent.component';
import { CardcomponentComponent } from './cardcomponent/cardcomponent.component';
import { LogoutComponent } from './logout/logout.component';

const AppRoutes: Routes = [
    { path: 'contact', component: ContactComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'shopping',
      canActivate: [AuthguardGuard],
      component: ShoppingComponent},
    { path: 'login', component: LoginComponent},
    { path: 'shoppingcart', canActivate: [AuthguardGuard], component: ShoppingcartComponent},
    { path: 'home',  component: HomeComponent} ,
    { path: 'payment', component: PaymentcomponentComponent},
    { path: 'card', component: CardcomponentComponent},
    { path: 'logout', component: LogoutComponent },
    { path: 'recipient', component: RecipientcomponentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    RegistrationComponent,
    LoginComponent,
    ShoppingComponent,
    HomeComponent,
    ShoppingcartComponent,
    HeadercomponentComponent,
    PaymentcomponentComponent,
    RecipientcomponentComponent,
    CardcomponentComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
