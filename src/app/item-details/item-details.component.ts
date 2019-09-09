import { Component, OnInit } from '@angular/core';
import { ItemDetailsService } from './item-details.service';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {

  content: string = "content"

  constructor(
    private itemDetailsService: ItemDetailsService
  ) { }

  ngOnInit() {
    this.itemDetailsService.contentChange.subscribe(content => {
      this.content = content;
    });
  }

}
