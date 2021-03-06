import { Injectable } from '@angular/core';
import items from '../items/items.json';
import {InventoryService} from './inventory.service';
import {StatsService} from './stats.service';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private items: Item[] = [];
  constructor(private inventoryService: InventoryService, private statsService: StatsService) { }
  public getAllItems(): Item[]  {

    return this.items;
  }
  public buyItem(item: Item, currentScore: number): void {
    if (currentScore >= item.getPrice()){
        this.inventoryService.giveItemToInvetory(item);
        this.statsService.decreaseScore(item.getPrice());
    } else{
        alert('You need more score to purchase this item');
    }
  }
}
