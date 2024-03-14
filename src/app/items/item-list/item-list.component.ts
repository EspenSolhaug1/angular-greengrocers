import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  constructor(private readonly itemService: ItemsService) {}
  items: Item[] = [];
  displayedItems: Item[] = [];
  sortBy: string = 'default';
  filterBy: string = 'all';

  async ngOnInit() {
    this.items = await this.itemService.getItems();
    this.displayedItems = this.items;
  }

  filterItems(param: string) {
    if (param === 'all') {
      this.displayedItems = this.items;
    } else if (param === 'vegetable' || param === 'fruit') {
      this.displayedItems = this.items.filter((item) => {
        return item.type === param;
      });
    }
    if (param === 'default') {
      this.displayedItems.sort((a, b) => {
        return a.id.localeCompare(b.id);
      });
    } else if (param === 'name') {
      this.displayedItems.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (param === 'price') {
      this.displayedItems.sort((a, b) => {
        return a.price - b.price;
      });
    }
  }

  sortByName() {
    this.displayedItems.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }
  sortByPrice() {
    this.displayedItems.sort((a, b) => {
      return a.price - b.price;
    });
  }
}
