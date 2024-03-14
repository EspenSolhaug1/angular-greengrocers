import { Component } from '@angular/core';
import { ItemsService } from '../items/items.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css'],
})
export class TotalComponent {
  constructor(public itemService: ItemsService) {}
}
