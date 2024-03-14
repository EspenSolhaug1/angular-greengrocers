// items.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private http: HttpClient) {}
  private cart: Item[] = [];
  private itemList: Item[] = [];
  private displayedList: Item[] = [];
  total: number = 0;

  async getItems(): Promise<Item[]> {
    const result = await firstValueFrom(
      this.http.get<Item[]>(`${environment.apiUrl}groceries`)
    );
    this.itemList = result;
    this.itemList.forEach((item) => {
      item.count = 0;
    });
    this.displayedList = this.itemList;
    return this.itemList;
  }

  addToCart(item: Item) {
    const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (index !== -1) {
      if (this.cart[index].count <= 9) {
        this.cart[index].count++;
      }
    } else {
      this.cart.push({ ...item, count: 1 });
    }
    this.calculateTotal();
  }

  removeFromCart(item: Item) {
    const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
    if (this.cart[index].count >= 2) {
      this.cart[index] = { ...item, count: item.count - 1 };
    } else if ((this.cart[index].count = 1)) {
      this.cart.splice(index, 1);
    }
    this.calculateTotal();
  }

  getCart() {
    return this.cart;
  }

  calculateTotal() {
    this.total = 0;
    this.cart.forEach((item) => {
      this.total += item.count * item.price;
    });
  }
}
