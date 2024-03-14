import { Component } from '@angular/core';
import { ItemsService } from '../items/items.service';
4;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  constructor(public itemService: ItemsService) {}
}
