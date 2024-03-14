import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  constructor(private readonly itemService: ItemsService) {}
  @Input('item') item: Item | null = null;

  addToCart(item: Item) {
    this.itemService.addToCart(item);
  }
}
