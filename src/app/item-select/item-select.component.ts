import { Component, OnInit, Input } from '@angular/core';
import { ItemDetailsService } from '../item-details/item-details.service';

@Component({
  selector: 'item-select',
  templateUrl: './item-select.component.html',
  styleUrls: ['./item-select.component.scss'],
})
export class ItemSelectComponent implements OnInit {

  constructor(
    private itemDetailsService: ItemDetailsService
  ) { }

  @Input() item: any;

  ngOnInit() {}

  onClick(item: any) {
    this.itemDetailsService.populate(item ? item.name : "null");
  }

  onPress(item: any) {
    console.log(item);
  }
}
