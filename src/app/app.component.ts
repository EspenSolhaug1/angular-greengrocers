import { Component } from '@angular/core';
import { ItemsService } from './items/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private itemService: ItemsService) {}

  get cart() {
    return this.itemService.getCart();
  }
}
