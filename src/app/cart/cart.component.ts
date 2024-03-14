import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../items/items.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() cart: Item[] = [];
  constructor(private itemService: ItemsService) {}

  addToCart(item: Item) {
    this.itemService.addToCart(item);
  }
  removeFromCart(item: Item) {
    this.itemService.removeFromCart(item);
  }
}
