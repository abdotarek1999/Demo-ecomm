import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './Components/parent/parent.component';
import { CardComponent } from './Components/parent/card/card.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ShorttextPipe } from './Components/pipes/shorttext.pipe';
import { StockPipe } from './Components/pipes/stock.pipe';
import { CartComponent } from './Components/mycart/cart/cart.component';
import { DetailsComponent } from './Components/parent/productdetails/details/details.component';
import { LoginComponent } from './Components/userlogin/login/login.component';
import { RegisterComponent } from './Components/userregister/register/register.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParentComponent,
    CardComponent,
    NotfoundComponent,
    ShorttextPipe,
    StockPipe,
    CartComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
