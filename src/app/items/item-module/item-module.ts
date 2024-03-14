import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TotalComponent } from 'src/app/total/total.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ItemComponent,
    ItemListComponent,
    CartComponent,
    TotalComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [ItemListComponent, ItemComponent, CartComponent, TotalComponent],
})
export class ItemModule {}
