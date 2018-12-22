import { Component } from '@angular/core';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  createItem: string;
  items: any = [];

  constructor() { }

  onSubmit() {
    this.addItem(this.createItem);
  }

  addItem(addItem: string) {
    const item: Item = new Item();
    item.id = this.items.length + 1;
    item.name = addItem;
    this.items.push(item);
    this.createItem = '';
  }

  deleteItem(deleteItem: Item) {
    for (let i = 0; i < this.items.length; i++ ) {
      if (deleteItem.id === this.items[i].id) {
        this.items.splice(i, 1);
      }
    }
  }
}
