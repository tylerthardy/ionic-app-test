import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {

  @Input() slots: any;
  inventorySlotIds: Number[] = new Array(28).fill(0).map((x, i) => i);

  constructor() { }

  ngOnInit() {
    if (this.slots) {
      let out = [];
      for (let i in this.slots) {
        let item = this.slots[i];
        out[item.slot - 1] = item;
      }
      this.slots = out;
    }
  }
}
