import { Component } from '@angular/core';
import { ItemsService } from '../items/items.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  constructor(public itemService: ItemsService) {}
}
