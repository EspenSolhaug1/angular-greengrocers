import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemModule } from './items/item-module/item-module';
import { AppRoutingModule } from './app-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { StoreComponent } from './store/store.component';
import { MenuComponent } from './layout/menu/menu.component';

@NgModule({
  declarations: [AppComponent, CheckoutComponent, StoreComponent],
  imports: [
    BrowserModule,
    ItemModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
